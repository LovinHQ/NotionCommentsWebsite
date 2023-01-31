import { Container } from '@/components/Container'
import PrimaryCTAButton from '../Buttons/PrimaryCTAButton'
import SecondaryCTAButton from '../Buttons/SecondaryCTAButton'

export function HeroBackground() {
  // 以(x, y) x<=14, y<=200的方式随机生成n个元组
  const random = (n) => {
    const arr = []
    for (let i = 0; i < n; i++) {
      arr.push([
        Math.floor(Math.random() * 14),
        Math.floor(Math.random() * 200),
      ])
    }
    return arr
  }

  return (
    <div className="gradient-opacity-top-bottom absolute top-0 mt-14 w-screen overflow-hidden">
      {Array(14)
        .fill()
        .map((_, i) => (
          <div className="flex" key={i}>
            {Array(200)
              .fill()
              .map((_, j) => (
                <div key={j}>
                  {random(500).some(([x, y]) => x === i && y === j) ? (
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

export function Hero() {
  return (
    <>
      <HeroBackground />
      <Container className="z-10 flex w-screen flex-col">
        <h1 className="max-w-[720px] text-4xl font-bold leading-tight tracking-tight text-[var(--label-title)] sm:text-7xl">
          Comment section made for your Notion blog
        </h1>
        <p className="mt-8 max-w-[720px] text-lg leading-normal text-[var(--label-muted)] sm:text-2xl">
          Create a comment embed in your Notion page or website to engage with
          all your audience. It takes one minute to set up, and it’s free!
        </p>
        <div className="mt-16 flex flex-col gap-6 sm:flex-row">
          <PrimaryCTAButton
            text="Get started for free"
            isIcon={false}
            onClick={() => {
              window.open('https://app.notioncomments.com')
            }}
          />
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
            <span className="font-semibold text-[var(--label-base)]">
              100+ bloggers and content creators
            </span>{' '}
            who use NotionComments to interact and make connections with their
            audience.
          </p>
        </div>
      </Container>
    </>
  )
}
