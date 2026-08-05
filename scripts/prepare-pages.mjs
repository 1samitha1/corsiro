#!/usr/bin/env node
/**
 * GitHub Pages has no SPA rewrite rules. Unknown paths return HTTP 404
 * (even when 404.html is the app shell). Play Console and other crawlers
 * reject that. Copy index.html into each known route directory so those
 * URLs return HTTP 200.
 */
import { copyFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const index = join(dist, 'index.html')

if (!existsSync(index)) {
  console.error('dist/index.html not found — run vite build first')
  process.exit(1)
}

const routes = [
  'about',
  'contact',
  'privacy',
  'terms',
  'products',
  'products/outwise',
  'products/outwise/privacy',
  'products/outwise/terms',
  'products/outwise/account-delete',
]

for (const route of routes) {
  const dir = join(dist, route)
  mkdirSync(dir, { recursive: true })
  copyFileSync(index, join(dir, 'index.html'))
  console.log(`wrote ${route}/index.html`)
}

copyFileSync(index, join(dist, '404.html'))
console.log('wrote 404.html')
