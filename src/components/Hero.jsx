import { Container } from '@/components/Container'
import PrimaryButton from './Buttons/PrimaryButton'
import SecondaryButton from './Buttons/SecondaryButton'

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-left lg:pt-32 ">
      <h1 className="text-[64px] max-w-[690px] font-bold tracking-tight sm:text-7xl">
      Comment made easy for your Notion post
      </h1>
      <p className="mt-6 text-lg tracking-tight">
      Create a comment embed in your Notion page that everyone can use. It takes one minute to set up, and it’s free!
      </p>
      <div className="mt-10 flex justify-left gap-x-6">
       <PrimaryButton text="Get started for free" isIcon={false} size="big" />
       <SecondaryButton text="Try a demo" isIcon={false} size="big" />
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          Join 100+ content creators and bloggers who use NotionComments to engage with their audience.
        </p>
      </div>
      <div className="w-full h-[62.5%] rounded-3xl demo"></div>
    </Container>
  )
}
