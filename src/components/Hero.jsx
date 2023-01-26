import { Container } from '@/components/Container'
import PrimaryCTAButton from './Buttons/PrimaryCTAButton'
import SecondaryCTAButton from './Buttons/SecondaryCTAButton'

export function Hero() {
  return (
    <Container className="flex w-screen flex-col">
      <h1 className="max-w-[720px] text-5xl font-bold leading-tight tracking-tighter text-[var(--label-title)] sm:text-7xl">
        Comment made easy for your Notion post
      </h1>
      <p className="mt-8 max-w-[720px] text-2xl text-[var(--label-muted)]">
        Create a comment embed in your Notion page that everyone can use. It
        takes one minute to set up, and it’s free!
      </p>
      <div className="mt-16 flex gap-x-6">
        <PrimaryCTAButton text="Get started for free" isIcon={false} />
        <SecondaryCTAButton text="Try a demo" isIcon={false} />
      </div>
      <div className="gap mt-16 flex max-w-lg flex-col gap-4">
        <div className="flex -space-x-3">
          <div className="h-10 w-10 rounded-full border-2 border-[var(--bg-base)] bg-[var(--bg-shade)] shadow-sm">
            {/* <Image src="/images/hero/1.png" fill alt="" /> */}
          </div>
          <div className="h-10 w-10 rounded-full border-2 border-[var(--bg-base)] bg-[var(--bg-shade)] shadow-sm">
            {/* <Image src="/images/hero/1.png" fill alt="" /> */}
          </div>
          <div className="h-10 w-10 rounded-full border-2 border-[var(--bg-base)] bg-[var(--bg-shade)] shadow-sm">
            {/* <Image src="/images/hero/1.png" fill alt="" /> */}
          </div>
          <div className="h-10 w-10 rounded-full border-2 border-[var(--bg-base)] bg-[var(--bg-shade)] shadow-sm">
            {/* <Image src="/images/hero/1.png" fill alt="" /> */}
          </div>
          <div className="h-10 w-10 rounded-full border-2 border-[var(--bg-base)] bg-[var(--bg-shade)] shadow-sm">
            {/* <Image src="/images/hero/1.png" fill alt="" /> */}
          </div>
          <div className="h-10 w-10 rounded-full border-2 border-[var(--bg-base)] bg-[var(--bg-shade)] shadow-sm">
            {/* <Image src="/images/hero/1.png" fill alt="" /> */}
          </div>
          <div className="h-10 w-10 rounded-full border-2 border-[var(--bg-base)] bg-[var(--bg-shade)] shadow-sm">
            {/* <Image src="/images/hero/1.png" fill alt="" /> */}
          </div>
        </div>
        <p className="font-display text-base font-normal leading-normal text-[var(--label-muted)]">
          Join{' '}
          <span className="font-medium text-[var(--label-base)]">
            100+ content creators and bloggers
          </span>{' '}
          who use NotionComments to engage with their audience.
        </p>
      </div>
    </Container>
  )
}
