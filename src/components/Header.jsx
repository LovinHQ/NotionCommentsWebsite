import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import SecondaryButton from '@/components/Buttons/SecondaryButton'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import PrimaryButton from '@/components/Buttons/PrimaryButton'

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button
      as={Link}
      href={href}
      className="block w-full rounded-lg px-3 py-2 transition duration-300 ease-out hover:bg-[var(--bg-shade)]"
    >
      {children}
    </Popover.Button>
  )
}
;<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="h-6 w-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  />
</svg>
;<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="h-6 w-6"
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 overflow-visible stroke-[var(--label-base)]"
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-50 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-white/60" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-4 top-full mt-4 flex origin-top flex-col rounded-2xl border border-[var(--bg-border)] bg-[var(--bg-base)] p-2 text-base text-[var(--label-base)] shadow-xl"
          >
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="/pricing">Pricing</MobileNavLink>
            <MobileNavLink href="/guides">Guides</MobileNavLink>
            <hr className="mx-3 my-2 border border-black/5" />
            <MobileNavLink href="https://app.notioncomments.com">
              Sign in with Notion
            </MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="fixed top-0 w-full">
      <nav className="relative z-50 flex h-16 w-full items-center justify-between border-b border-[var(--bg-border)] bg-[var(--bg-sub)] px-4 sm:px-6 md:px-8">
        <Link className="flex items-center gap-2" href="/" aria-label="Home">
          <Logo className="h-6 w-6" />
          <div className="text-lg font-bold text-[var(--label-title)]">
            NotionComments
          </div>
        </Link>
        <div className="hidden gap-4 md:flex">
          <SecondaryButton
            isIcon={false}
            size="big"
            text="Features"
            href="#features"
            className="font-bold text-[var(--label-base)]"
          />
          <SecondaryButton
            isIcon={false}
            size="big"
            text="Pricing"
            href="/pricing"
          />
          <SecondaryButton
            isIcon={false}
            size="big"
            text="Guides"
            href="/guides"
          />
        </div>
        <div>
          <PrimaryButton
            onClick={() => {
              window.open('https://app.notioncomments.com')
            }}
            isIcon={false}
            size="big"
            text="Sign in with Notion"
            className="hidden md:block"
          />
          <div className="md:hidden">
            <MobileNavigation />
          </div>
        </div>
      </nav>
    </header>
  )
}
