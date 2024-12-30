/// <reference types="vite/client" />

declare module '*.md' {
  // Markdown file frontmatter
  export const title: string
  export const date: string
  export const author: string
  export const excerpt: string
  export const coverImage: string
  // Markdown content
  export const html: string
  export const content: string
  export default {
    title: string
    date: string
    author: string
    excerpt: string
    coverImage: string
    html: string
    content: string
  }
}