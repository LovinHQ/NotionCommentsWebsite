import Head from 'next/head'
import { CallToAction } from '@/components/Sections/CallToActionSection'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Sections/HeroSection'
import { Features } from '@/components/Sections/FeaturesSection'
import { GettingStarted } from '@/components/Sections/GettingStartedSection'
import { Demo } from '@/components/Sections/DemoSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>NotionComments - Comment made easy for your Notion post</title>
      </Head>
      <Header />
      <main className="mt-32 flex flex-col gap-32 md:mt-48">
        <Hero />
        <Demo />
        <Features />
        <GettingStarted />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
