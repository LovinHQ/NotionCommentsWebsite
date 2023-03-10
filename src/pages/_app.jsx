import 'focus-visible'
import '@/styles/tailwind.css'
import '@/styles/common.css'
import Head from 'next/head'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import { DocLayout } from '@/components/DocLayout'
import 'focus-visible'
import { Analytics } from '@vercel/analytics/react'
import { Header } from '@/components/Header'

function getNodeText(node) {
  let text = ''
  for (let child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  let sections = []

  for (let node of nodes) {
    if (node.name === 'h2' || node.name === 'h3') {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title)
        node.attributes.id = id
        if (node.name === 'h3') {
          if (!sections[sections.length - 1]) {
            throw new Error(
              'Cannot add `h3` to table of contents without a preceding `h2`'
            )
          }
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

export default function App({ Component, pageProps }) {
  if (pageProps.markdoc) {
    const { markdoc } = pageProps

    let title = 'Guides - NotionComments'
    let description = 'Guides - NotionComments'

    if (markdoc.frontmatter) {
      title = markdoc.frontmatter.title
      description = markdoc.frontmatter.description
    }

    let pageTitle =
      markdoc.frontmatter.pageTitle ||
      `${markdoc.frontmatter.title} - Guides - NotionComments`

    let tableOfContents = markdoc.content
      ? collectHeadings(markdoc.content)
      : []

    console.log('------------------')
    console.log(title)
    console.log(pageTitle)
    console.log(description)
    console.log(tableOfContents)

    return (
      <>
        <Head>
          <title>{pageTitle}</title>
          <link rel="icon" href="/logo.png" />
          {description && <meta name="description" content={description} />}
        </Head>
        <DocLayout title={title} tableOfContents={tableOfContents}>
          <Component {...pageProps} />
        </DocLayout>
        <Analytics />
      </>
    )
  } else {
    return (
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
    )
  }
}
