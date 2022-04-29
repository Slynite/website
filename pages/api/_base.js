import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getSlugs(dir) {
  return fs.readdirSync(dir)
}

export function getBySlug(slug, fields = [], dir) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(dir, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  if (fields.length < 2) {
    items[fields] = data[fields]
  }

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllSortedByDate(fields = [], dir) {
    const slugs = getSlugs(dir)
    const allData = slugs
      .map((slug) => getBySlug(slug, fields, dir))
      .sort((first, second) => (first.date > second.date ? 1 : -1))
    return allData
}

export function getAllByFields(fields = [], dir) {
  const slugs = getSlugs(dir)
  const allData = slugs
    .map((slug) => getBySlug(slug, fields, dir))
  return allData
}