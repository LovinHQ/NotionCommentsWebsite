import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dialog } from '@headlessui/react'

import { Navigation } from '@/components/Navigation'

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

function MenuIcon(props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon(props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M5 5l14 14M19 5l-14 14" />
    </svg>
  )
}

function MobileNavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block w-full px-1 py-2 text-lg font-bold text-[var(--label-muted)] transition duration-150 ease-out hover:text-[var(--label-title)]"
    >
      {children}
    </Link>
  )
}

export function MobileNavigation({ navigation }) {
  let router = useRouter()
  let [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    function onRouteChange() {
      setIsOpen(false)
    }

    router.events.on('routeChangeComplete', onRouteChange)
    router.events.on('routeChangeError', onRouteChange)

    return () => {
      router.events.off('routeChangeComplete', onRouteChange)
      router.events.off('routeChangeError', onRouteChange)
    }
  }, [router, isOpen])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative"
        aria-label="Open navigation"
      >
        <MenuIcon className="h-6 w-6 stroke-[var(--label-muted)]" />
      </button>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        className="fixed inset-0 z-50 flex items-start justify-start overflow-y-auto bg-gray-900/60 backdrop-blur md:hidden"
        aria-label="Navigation"
      >
        <Dialog.Panel className="min-h-full w-full max-w-xs bg-[var(--bg-base)] px-4 pt-5 pb-12 sm:px-6">
          <div className="flex items-center justify-start">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
            >
              <CloseIcon className="h-6 w-6 stroke-[var(--label-muted)]" />
            </button>
          </div>

          <div className="mt-4 mb-16 flex flex-col space-y-2">
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="/pricing">Pricing</MobileNavLink>
            <MobileNavLink href="/guides">Guides</MobileNavLink>
            <hr className="mx-1 my-2 border-[var(--bg-border)]" />
            <MobileNavLink href="https://app.notioncomments.com">
              Sign in with Notion
            </MobileNavLink>
          </div>

          {navigation ? (
            <Navigation navigation={navigation} className="mt-5 px-1" />
          ) : null}
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
