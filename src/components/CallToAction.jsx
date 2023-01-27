import Image from 'next/image'
import PrimaryCTAButton from '@/components/Buttons/PrimaryCTAButton'
import { Container } from '@/components/Container'
import FooterBackground from '@/images/resources/footer.svg'
import { Logo } from './Logo'

export function CallToAction() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Container className="">
        <div className="z-10 flex flex-col items-center justify-center gap-6 rounded-3xl border border-[var(--bg-border)] bg-[var(--bg-sub)] py-8 px-4 shadow-2xl sm:gap-12 sm:py-16 sm:px-16">
          <div className="h-12 origin-top scale-[200%]">
            <Logo />
          </div>
          <h2 className="w-full text-center text-3xl font-bold text-[var(--label-title)] sm:text-4xl">
            Boost engagement with your audience today
          </h2>
          <PrimaryCTAButton isIcon={false} text="Get started for free" />
        </div>
      </Container>
      <FooterBackground className="relative -mt-48 flex h-48 w-full text-[var(--bg-base-dark)]" />
    </div>
  )
}
