import Image from 'next/image'
import PrimaryCTAButton from '@/components/Buttons/PrimaryCTAButton'
import { Container } from '@/components/Container'
import FooterBackground from '@/images/resources/footer.svg'
import { Logo } from './Logo'

function CTABackground() {
  const random = (n) => {
    const arr = []
    for (let i = 0; i < n; i++) {
      arr.push([Math.floor(Math.random() * 16), Math.floor(Math.random() * 40)])
    }
    return arr
  }

  return (
    <div className="absolute top-0 mt-16 w-screen overflow-hidden">
      {Array(16)
        .fill()
        .map((_, i) => (
          <div className="flex" key={i}>
            {Array(40)
              .fill()
              .map((_, j) => (
                <div key={j}>
                  {random(100).some(([x, y]) => x === i && y === j) ? (
                    <div className="h-6 w-6 border-[0.25px] border-[var(--bg-border)] bg-[#F5F5F5] opacity-80 sm:h-10 sm:w-10" />
                  ) : (
                    <div className="h-6 w-6 border-[0.25px] border-[var(--bg-border)] opacity-80 sm:h-10 sm:w-10" />
                  )}
                </div>
              ))}
          </div>
        ))}
    </div>
  )
}

export function CallToAction() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Container className="">
        <div className="z-10 flex flex-col items-center justify-center gap-6 overflow-hidden rounded-3xl border border-[var(--bg-border)] bg-[var(--bg-sub)] py-8 shadow-2xl sm:gap-12 sm:py-16 sm:px-16">
          <div className="relative h-full w-full -translate-y-32 opacity-80 sm:-translate-x-16 md:-translate-x-[72px]">
            <CTABackground />
          </div>
          <div className="z-10 h-12 origin-top scale-[200%]">
            <Logo />
          </div>
          <h2 className="z-10 w-full px-4 text-center text-3xl font-bold text-[var(--label-title)] sm:text-4xl">
            Boost engagement with your audience today
          </h2>
          <PrimaryCTAButton
            isIcon={false}
            text="Get started for free"
            onClick={() => {
              window.open('https://app.notioncomments.com')
            }}
            className="z-10"
          />
        </div>
      </Container>

      <FooterBackground className="relative -mt-48 flex h-48 w-full text-[var(--bg-base-dark)]" />
    </div>
  )
}
