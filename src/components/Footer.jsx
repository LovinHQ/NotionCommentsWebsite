import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import SecondaryButton from '@/components/Buttons/SecondaryButton'
import TwitterIcon from '@/images/icons/twitter.svg'
import MailIcon from '@/images/icons/mailFill.svg'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block py-2 text-base font-semibold text-[var(--label-muted)] transition duration-150 ease-out hover:text-[var(--label-base-dark)] md:px-4"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="bg-[var(--bg-base-dark)]">
      <Container className="gap-6 py-8 md:gap-4">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Logo theme="dark" className="mx-auto h-10 w-auto" />
            <div className="text-lg font-bold text-[var(--label-base-dark)]">
              NotionComments
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <nav className="flex justify-between gap-2" aria-label="nav links">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/guides">Guides</NavLink>
            </nav>

            <button
              onClick={() => {
                window.open('https://twitter.com/NotionComments')
              }}
              className={` group relative flex h-10 select-none items-center justify-center gap-1.5 rounded-xl border border-[#363636] bg-[#212121] pl-2 pr-3 text-base
                  font-semibold text-[var(--label-muted)] outline-none transition 
                  duration-150 ease-out hover:cursor-pointer
                  hover:border-[#4E4E4E] hover:bg-[#2B2B2B] hover:text-[var(--label-base-dark)]
                  focus:ring-2 focus:ring-[var(--label-base-dark)] focus:ring-offset-2 focus:ring-offset-[var(--bg-base-dark)] 
                  disabled:cursor-default disabled:text-[var(--label-faint)]
                  `}
            >
              <TwitterIcon className="h-6 w-6" />
              <span
                className={`font-semibold text-[var(--label-muted)] transition duration-150 ease-out group-hover:text-[var(--label-base-dark)] group-disabled:text-[var(--label-faint)]`}
              >
                Follow us on Twitter
              </span>
            </button>
          </div>
        </div>
        <div className="h-px bg-white/5" />
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="text-sm font-normal text-[var(--label-muted)]">
              Need help or have feedback ?
            </div>
            <Link
              className="flex gap-1 text-[var(--label-link)] transition duration-150 ease-out hover:text-[var(--label-link-hover)]"
              href="mailto:contact@notioncomments.com"
            >
              <MailIcon className="my-1 h-4 w-4 text-sm" />
              <div className="">contact@notioncomments.com</div>
            </Link>
          </div>
          <p className="text-sm text-[var(--label-muted)]">
            © 2023 NotionComments - All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  )
}
