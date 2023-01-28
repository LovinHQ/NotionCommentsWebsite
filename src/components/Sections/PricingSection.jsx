import { useState } from 'react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Container } from '@/components/Container'
import SectionTag from '../SectionTag'
import { HeroBackground } from './HeroSection'
import CheckIcon from '@/images/icons/check.svg'
import SecondaryCTAButton from '../Buttons/SecondaryCTAButton'
import PrimaryCTAButton from '../Buttons/PrimaryCTAButton'
import StripeBackground from '@/images/resources/stripe.svg'

export function PricingSection() {
  const [subscriptionCycle, setSubscriptionCycle] = useState('monthly')

  return (
    <>
      <HeroBackground />
      <Container
        id="pricing"
        aria-label="Pricing"
        className="z-10 -mt-32 items-center gap-20"
      >
        <div className="mt-32 flex flex-col justify-center">
          <SectionTag text="PRICING" />
          <h1 className="my-4 flex justify-center text-center text-4xl font-bold leading-tight text-[var(--label-title)] md:text-5xl">
            Affordable Pricing for Starting Creators
          </h1>
          <h3 className="m-auto flex max-w-3xl justify-center text-center text-lg font-normal leading-normal text-[var(--label-muted)]">
            Use NotionComments for free to get response from your audience now.
            Upgrade to enable unlimited embeds, branding removal and addional
            features.
          </h3>
        </div>
        <div className="flex max-w-3xl flex-col gap-6 sm:flex-row sm:gap-8">
          <div className="neutral-border flex w-full flex-col gap-12 rounded-3xl px-8 pt-8 pb-12">
            <h3 className="font-display text-xl font-bold leading-normal tracking-widest text-[var(--label-title)]">
              FREE
            </h3>
            <h2 className="flex text-left text-3xl font-bold leading-normal text-[var(--label-base)]">
              Free for creators
            </h2>
            <div className="-my-4 flex h-6 items-center">
              <div className="h-px grow bg-gradient-to-r from-transparent to-[var(--accent-base)]" />
              <div className="h-px grow bg-gradient-to-l from-transparent to-[var(--accent-base)]" />
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex items-center gap-3">
                <CheckIcon className="h-4 w-4 text-[var(--accent-base)]" />
                <p className="flex text-left text-base font-normal leading-normal text-[var(--label-base)]">
                  1 Notion Workspace
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="h-4 w-4 text-[var(--accent-base)]" />
                <p className="flex text-left text-base font-normal leading-normal text-[var(--label-base)]">
                  20 comment embeds
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="h-4 w-4 text-[var(--accent-base)]" />
                <p className="flex text-left text-base font-normal leading-normal text-[var(--label-base)]">
                  Unlimited responses
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="h-4 w-4 text-[var(--accent-base)]" />
                <p className="flex text-left text-base font-normal leading-normal text-[var(--label-base)]">
                  Email notification for commenters
                </p>
              </div>
            </div>
            <SecondaryCTAButton isIcon={false} text="Get started with Free" />
          </div>
          <div className="relative flex w-full flex-col gap-12 overflow-hidden rounded-3xl border border-[var(--bg-border)] bg-gradient-to-b from-[var(--bg-base)] to-[#F5F5F5F5] px-8 pt-8 pb-12">
            <StripeBackground className="absolute translate-x-10 -translate-y-10 rotate-[30deg] text-[var(--bg-shade)] " />
            <h3 className="font-display text-xl font-bold leading-normal tracking-widest text-[var(--label-title)]">
              PRO
            </h3>
            <div className="flex items-baseline gap-2">
              <h2 className="flex text-left text-3xl font-bold leading-normal text-[var(--label-base)]">
                $4
              </h2>
              <div className="text-base font-normal text-[var(--label-muted)]">
                / month
              </div>
            </div>
            <div className="-my-4 flex h-6 items-center">
              <div className="h-px grow bg-gradient-to-r from-transparent to-[var(--accent-base)]" />
              <ToggleGroup.Root
                type="single"
                defaultValue="monthly"
                aria-label="Pro subscription cycle"
                className="mx-1 flex h-6 select-none items-center rounded-full bg-[var(--bg-shade)]"
              >
                <ToggleGroup.Item
                  className="flex h-5 w-20 items-center justify-center rounded-full px-4 text-xs transition duration-150 ease-out radix-state-off:bg-transparent radix-state-off:font-normal radix-state-off:text-[var(--label-muted)] radix-state-on:bg-[var(--accent-base)] radix-state-on:font-semibold radix-state-on:text-[var(--accent-label)]"
                  value="monthly"
                  aria-label="Pay monthly"
                >
                  Monthly
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  className="flex h-5 w-20 items-center justify-center rounded-full px-4 text-xs transition duration-150 ease-out radix-state-off:bg-transparent radix-state-off:font-normal radix-state-off:text-[var(--label-muted)] radix-state-on:bg-[var(--accent-base)] radix-state-on:font-semibold radix-state-on:text-[var(--accent-label)]"
                  value="yearly"
                  aria-label="Pay yearly"
                >
                  Yearly
                </ToggleGroup.Item>
              </ToggleGroup.Root>
              <div className="h-px grow bg-gradient-to-l from-transparent to-[var(--accent-base)]" />
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex items-center gap-3">
                <p className="flex text-left text-base font-normal leading-normal text-[var(--label-base)]">
                  Everything in Free, plus…
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="h-4 w-4 text-[var(--accent-base)]" />
                <p className="flex text-left text-base font-normal leading-normal text-[var(--label-base)]">
                  Unlimited Notion Workspaces
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="h-4 w-4 text-[var(--accent-base)]" />
                <p className="flex text-left text-base font-normal leading-normal text-[var(--label-base)]">
                  Unlimited comment embeds
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="h-4 w-4 text-[var(--accent-base)]" />
                <p className="flex text-left text-base font-normal leading-normal text-[var(--label-base)]">
                  NotionComments branding removal
                </p>
              </div>
            </div>
            <PrimaryCTAButton isIcon={false} text="Get started with Pro" />
          </div>
        </div>
      </Container>
    </>
  )
}
