const fs = require('fs')
const path = require('path')

function walk(dir) {
  let results = []
  const list = fs.readdirSync(dir)
  list.forEach(function (file) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath))
    } else {
      results.push(filePath)
    }
  })
  return results
}

const root = process.cwd()
const files = walk(root)
const tsFiles = files.filter((f) => f.endsWith('.ts') || f.endsWith('.tsx'))

if (tsFiles.length > 0) {
  console.error('ERROR: Found TypeScript files:')
  tsFiles.forEach((f) => console.error('→', f))
  process.exit(1)
}

console.log('No .ts/.tsx files found.')
process.exit(0)
