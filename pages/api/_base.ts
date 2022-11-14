import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { NextApiRequest, NextApiResponse } from 'next'

export type Items = {
  [key: string]: string
}

export default function defaultApiHandler(req: NextApiRequest, res: NextApiResponse) {
  res.status(403).send(`This function is currently not for public use. \nRequest Method: ${req.method} \nRequest Url: ${req.url}`)
}

export function getSlugs(dir: string): string[] {
  return fs.readdirSync(dir)
}

export function getBySlug(slug: string, fields:string[], dir: string) {
  const realSlug:string = slug.replace(/\.md$/, '')
  const fullPath:string = path.join(dir, `${realSlug}.md`)
  const fileContents:string = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items : Items = {}

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

export function getAllSortedByDate(fields:string[], dir:string): any {
    const slugs:string[] = getSlugs(dir)
    const allData:Items[] = slugs
      .map((slug) => getBySlug(slug, fields, dir))
      .sort((first, second) => (Date.parse(first.date) < Date.parse(second.date) ? 1 : -1))
    return allData
}

export function getAllByFields(fields:string[], dir:string): any {
  const slugs:string[] = getSlugs(dir)
  const allData:Items[] = slugs
    .map((slug) => getBySlug(slug, fields, dir))
  return allData
}