#!/usr/bin/env node
/**
 * GitHub Pages has no SPA rewrite rules. Unknown paths return HTTP 404
 * (even when 404.html is the app shell). Play Console and other crawlers
 * reject that. Copy index.html into each known route directory so those
 * URLs return HTTP 200.
 *
 * Legal pages under public/products/outwise/* are static HTML with full
 * policy text (no JS required) for Play Console / crawlers. Do not overwrite them.
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

/** SPA shell only — marketing / app pages that need the React bundle */
const spaRoutes = [
  'about',
  'contact',
  'privacy',
  'terms',
  'products',
  'products/outwise',
  'products/outwise/terms',
]

/** Served as static HTML from public/ (already copied into dist by Vite) */
const staticLegalRoutes = [
  'products/outwise/privacy',
  'products/outwise/account-delete',
]

for (const route of spaRoutes) {
  const dir = join(dist, route)
  mkdirSync(dir, { recursive: true })
  copyFileSync(index, join(dir, 'index.html'))
  console.log(`wrote SPA shell ${route}/index.html`)
}

for (const route of staticLegalRoutes) {
  const file = join(dist, route, 'index.html')
  if (!existsSync(file)) {
    console.error(`Missing static legal page: ${route}/index.html (expected from public/)`)
    process.exit(1)
  }
  console.log(`kept static legal page ${route}/index.html`)
}

copyFileSync(index, join(dist, '404.html'))
console.log('wrote 404.html')
