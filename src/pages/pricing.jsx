import Head from 'next/head'

import { Faq } from '@/components/Sections/FaqSection'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PricingSection } from '@/components/Sections/PricingSection'
import { CallToAction } from '@/components/Sections/CallToActionSection'
import PrimaryCTAButton from '@/components/Buttons/PrimaryCTAButton'

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - NotionComments</title>
      </Head>
      <Header />
      <main className="mt-32 flex flex-col gap-32 md:mt-48">
        <PricingSection />
        <Faq />
        <div className="gap flex flex-col items-center justify-center gap-10 pb-32">
          <h1 className="flex justify-center text-center text-3xl font-bold leading-tight text-[var(--label-title)] sm:text-4xl md:text-5xl">
            Ready to connect with your audience?
          </h1>
          <PrimaryCTAButton
            isIcon={false}
            text="Get started for free"
            onClick={() => {
              window.open('https://app.notioncomments.com')
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
