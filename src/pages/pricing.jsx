import Head from 'next/head'

import { Faqs } from '@/components/Sections/FaqSection'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PricingSection } from '@/components/Sections/PricingSection'

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - NotionComments</title>
      </Head>
      <Header />
      <main className="mt-32 flex flex-col gap-32 md:mt-48">
        <PricingSection />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
