import Link from 'next/link'
import clsx from 'clsx'
import SecondaryButton from '@/components/Buttons/SecondaryButton'
import { Logo } from '@/components/Logo'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import { MobileNavigation } from '@/components/MobileNavigation'

export function Header({ navigation }) {
  return (
    <header className="fixed top-0 z-20 w-full">
      <nav className="relative z-50 flex h-14 w-full flex-row-reverse items-center justify-between border-b border-[var(--bg-border)] bg-white/70 px-4 backdrop-blur-md sm:px-6 md:flex-row md:px-8">
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
            onClick={() => {
              if (window.location.pathname === '/') {
                window.location.hash = 'features'
              } else {
                window.open('/#features', '_self')
              }
            }}
          />
          <SecondaryButton
            isIcon={false}
            size="big"
            text="Pricing"
            onClick={() => {
              window.open('/pricing', '_self')
            }}
          />
          <SecondaryButton
            isIcon={false}
            size="big"
            text="Guides"
            onClick={() => {
              window.open('/guides', '_self')
            }}
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
          <div className="flex items-center md:hidden">
            <MobileNavigation navigation={navigation} />
          </div>
        </div>
      </nav>
    </header>
  )
}
