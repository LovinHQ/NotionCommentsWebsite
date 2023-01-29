import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import { Header } from '@/components/Header'
import { Prose } from '@/components/Prose'

const navigation = [
  {
    title: 'Introduction',
    links: [
      { title: 'Getting started', href: '/guides' },
      { title: 'Installation', href: '/guides/installation' },
    ],
  },
  {
    title: 'Core concepts',
    links: [
      { title: 'Understanding caching', href: '/guides/understanding-caching' },
      {
        title: 'Predicting user behavior',
        href: '/guides/predicting-user-behavior',
      },
      { title: 'Basics of time-travel', href: '/guides/basics-of-time-travel' },
      {
        title: 'Introduction to string theory',
        href: '/guides/introduction-to-string-theory',
      },
      { title: 'The butterfly effect', href: '/guides/the-butterfly-effect' },
    ],
  },
  {
    title: 'Advanced guides',
    links: [
      { title: 'Writing plugins', href: '/guides/writing-plugins' },
      { title: 'Neuralink integration', href: '/guides/neuralink-integration' },
      { title: 'Temporal paradoxes', href: '/guides/temporal-paradoxes' },
      { title: 'Testing', href: '/guides/testing' },
      { title: 'Compile-time caching', href: '/guides/compile-time-caching' },
      {
        title: 'Predictive data generation',
        href: '/guides/predictive-data-generation',
      },
    ],
  },
  {
    title: 'API reference',
    links: [
      { title: 'CacheAdvance.predict()', href: '/guides/cacheadvance-predict' },
      { title: 'CacheAdvance.flush()', href: '/guides/cacheadvance-flush' },
      { title: 'CacheAdvance.revert()', href: '/guides/cacheadvance-revert' },
      { title: 'CacheAdvance.regret()', href: '/guides/cacheadvance-regret' },
    ],
  },
  {
    title: 'Contributing',
    links: [
      { title: 'How to contribute', href: '/guides/how-to-contribute' },
      { title: 'Architecture guide', href: '/guides/architecture-guide' },
      { title: 'Design principles', href: '/guides/design-principles' },
    ],
  },
]

function useTableOfContents(tableOfContents) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id)

  let getHeadings = useCallback((tableOfContents) => {
    return tableOfContents
      .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
      .map((id) => {
        let el = document.getElementById(id)
        if (!el) return

        let style = window.getComputedStyle(el)
        let scrollMt = parseFloat(style.scrollMarginTop)

        let top = window.scrollY + el.getBoundingClientRect().top - scrollMt
        return { id, top }
      })
  }, [])

  useEffect(() => {
    if (tableOfContents.length === 0) return
    let headings = getHeadings(tableOfContents)
    function onScroll() {
      let top = window.scrollY
      let current = headings[0].id
      for (let heading of headings) {
        if (top >= heading.top) {
          current = heading.id
        } else {
          break
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [getHeadings, tableOfContents])

  return currentSection
}

export function DocLayout({ children, title, tableOfContents }) {
  let router = useRouter()
  let allLinks = navigation.flatMap((section) => section.links)
  let linkIndex = allLinks.findIndex((link) => link.href === router.pathname)
  let previousPage = allLinks[linkIndex - 1]
  let nextPage = allLinks[linkIndex + 1]
  let section = navigation.find((section) =>
    section.links.find((link) => link.href === router.pathname)
  )
  let currentSection = useTableOfContents(tableOfContents)

  function isActive(section) {
    if (section.id === currentSection) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

  return (
    <>
      <Header navigation={navigation} />

      <div className="max-w-8xl relative mx-auto flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative -ml-4 hidden flex-none bg-gray-50 sm:-ml-6 md:block md:px-8 lg:-ml-8">
          <div className="sticky top-16 h-[calc(100vh-64px)] overflow-y-auto overflow-x-hidden pt-8 pb-16 pl-0.5">
            <Navigation navigation={navigation} className="w-64" />
          </div>
        </div>
        <div className="min-w-0 max-w-2xl flex-auto py-16 md:px-6 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
          <article className="pt-8">
            {(title || section) && (
              <header className="mb-9 space-y-1">
                {section && (
                  <p className="font-display text-sm font-medium text-[var(--accent-base)]">
                    {section.title}
                  </p>
                )}
                {title && (
                  <h1 className="font-display text-3xl font-medium tracking-tight text-[var(--label-title)] ">
                    {title}
                  </h1>
                )}
              </header>
            )}
            <Prose>{children}</Prose>
          </article>
          <dl className="mt-12 flex border-t border-[var(--bg-border)] pt-6">
            {previousPage && (
              <div>
                <dt className="text-sm font-semibold text-[var(--label-base)] ">
                  Previous
                </dt>
                <dd className="mt-1">
                  <Link
                    href={previousPage.href}
                    className="text-base font-medium  text-[var(--label-muted)] transition duration-150 ease-out hover:text-[var(--label-base)] "
                  >
                    <span aria-hidden="true">&larr;</span> {previousPage.title}
                  </Link>
                </dd>
              </div>
            )}
            {nextPage && (
              <div className="ml-auto text-right">
                <dt className="text-sm font-semibold text-[var(--label-base)]  ">
                  Next
                </dt>
                <dd className="mt-1">
                  <Link
                    href={nextPage.href}
                    className="text-base font-medium  text-[var(--label-muted)] transition duration-150 ease-out hover:text-[var(--label-base)] "
                  >
                    {nextPage.title} <span aria-hidden="true">&rarr;</span>
                  </Link>
                </dd>
              </div>
            )}
          </dl>
        </div>
        <div className="hidden xl:sticky xl:top-[4rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4rem)] xl:flex-none xl:overflow-y-auto xl:py-8 xl:pr-6">
          <nav aria-labelledby="on-this-page-title" className="w-56">
            {tableOfContents.length > 0 && (
              <>
                <h2
                  id="on-this-page-title"
                  className="text-sm font-semibold text-[var(--label-base)]"
                >
                  Table of Contents
                </h2>
                <ol role="list" className="mt-4 space-y-3 text-sm">
                  {tableOfContents.map((section) => (
                    <li key={section.id}>
                      <h3>
                        <Link
                          href={`#${section.id}`}
                          className={clsx(
                            isActive(section)
                              ? 'text-[var(--accent-base)]'
                              : 'font-normal text-[var(--label-muted)] transition duration-150 ease-out hover:text-[var(--label-base)]'
                          )}
                        >
                          {section.title}
                        </Link>
                      </h3>
                      {section.children.length > 0 && (
                        <ol
                          role="list"
                          className="mt-2 space-y-3 pl-4 text-[var(--label-muted)]"
                        >
                          {section.children.map((subSection) => (
                            <li key={subSection.id}>
                              <Link
                                href={`#${subSection.id}`}
                                className={
                                  isActive(subSection)
                                    ? 'text-[var(--accent-base)]'
                                    : 'font-normal text-[var(--label-muted)] transition duration-150 ease-out hover:text-[var(--label-base)]'
                                }
                              >
                                {subSection.title}
                              </Link>
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  ))}
                </ol>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  )
}
