import path from 'node:path';
import { getAuthor } from '../../data/authors/index.js'
import type { BlogPost } from '../../types.js'

export const slugFromFile = (file: string) => path.parse(file).name;

export function sortPosts(a: BlogPost, b: BlogPost) {
    return b.data.publishDate.getTime() - a.data.publishDate.getTime()
}
