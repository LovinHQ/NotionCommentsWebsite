import Image from 'next/image'
import * as Collapsible from '@radix-ui/react-collapsible'
import ChevronDownIcon from '@/images/icons/chevronDown.svg'
import { Container } from '@/components/Container'

const faqs = [
  {
    section: 'Account',
    questions: [
      {
        question:
          'Do I need to create an account for NotionComments if I already have a Notion account?',
        answer:
          'Yes, but kind of no. NotionComments does not share the same account system with Notion(since we’re two different teams), but we made the onboarding process relatively simple, so that you can sign up with a Notion account, and we automatically use your Notion account’s email to create a NotionComments account.',
      },
      {
        question: 'What pages should I give NotionComments access of?',
        answer:
          'Only the ones you need to add embed in. We suggest creating embeds with the link of the Notion page you’re going paste the embed in. So we only need access to the pages you already want to show the public.',
      },
    ],
  },
  {
    section: 'Comment embed',
    questions: [
      {
        question: 'How many comment embeds can I create with the Free plan?',
        answer:
          '20. We provide a Free plan with 20 embeds for new content creators to get started. For professional creators who need more embeds and advanced features, you can turn to our Pro plan',
      },
      {
        question: 'How many times can people comment in my embed?',
        answer:
          'Infinite! We support unlimited responses for each embed to give you and your audience the best opportunity to know each other.',
      },
      {
        question:
          'Can I paste the embed in another Notion page instead of the original one which I copied link from?',
        answer:
          'Yes of course. But the comments from that embed will only be shown and managed in the original Notion page. We’d recommend creating the embed in the Notion page where you copied link from for consistency reasons. Surely you can innovate how you’d like to use the integration!',
      },
    ],
  },
  {
    section: 'Comment management',
    questions: [
      {
        question:
          'Can I hide the comment section at the top of my Notion page?',
        answer:
          'Yes! Notion provides the ability to customize the page style. You can go to the top right corner, open three-dots menu, and turn off the Top-level page discussions visibility. ',
      },
      {
        question:
          'How can I delete a comment I don’t like in the comment embed?',
        answer:
          'In the top-level comment section of your Notion page, you can manage all the comments from your readers. You can delete them here. To do this, you need to expand the top-level comment section first.',
      },
      {
        question: 'What happens if I resolve a comment thread in Notion?',
        answer:
          'In that case, we won’t be able to retrieve the comments data of that thread, and you won’t see them in the embed. But you can always re-open it and see them again.',
      },
    ],
  },
  {
    section: 'Privacy',
    questions: [
      {
        question: 'What data do you collect?',
        answer:
          'Your Notion portrait, name and email. We also need access to reading and writing your comments and page content, but we don’t store any of your data. It’s all in your Notion database.',
      },
      {
        question: 'Does NotionComments store or see my Notion page content?',
        answer:
          'No. We only require access to the comments of your Notion workspace. We won’t see any  content in your Notion.',
      },
    ],
  },
  {
    section: 'Pricing',
    questions: [
      {
        question: 'Is NotionComments going to be free?',
        answer:
          'Yes. We’re going to keep the Free plan free forever. We want to help creators get started with NotionComments, and we want to make sure that we’re providing the best value for creators who want to use NotionComments for their work.',
      },
      {
        question: 'What’s the difference between the Free and Pro plan?',
        answer:
          'The Free plan is for new creators who want to get started with NotionComments. It provides 20 embeds, and you can upgrade to the Pro plan at any time. The Pro plan is for professional creators who need more embeds and advanced features. It provides unlimited embeds, and you can downgrade to the Free plan at any time.',
      },
    ],
  },
]

export function Faq() {
  return (
    <div className="border-y border-[var(--bg-border)] bg-[var(--bg-sub)] py-20">
      <Container id="faq" aria-labelledby="faq" className="gap-16">
        <h1
          id="faq-title"
          className="flex justify-center text-center text-4xl font-bold leading-tight text-[var(--label-title)] md:text-5xl"
        >
          Frequently Asked Questions
        </h1>
        {faqs.map((faq, faqIndex) => (
          <div key={faqIndex} className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-[var(--label-base)]">
              {faq.section}
            </h2>
            <ul role="list" className="flex flex-col gap-2">
              {faq.questions.map((question, questionIndex) => {
                return (
                  <li
                    key={questionIndex}
                    className="border-b border-[var(--bg-border)] last:border-transparent"
                  >
                    <Collapsible.Root className="group flex flex-col items-start gap-2">
                      <Collapsible.Trigger className="flex w-full items-start justify-between gap-4 py-4">
                        <h3 className="flex max-w-2xl text-start text-lg font-semibold leading-7 text-[var(--label-base)]">
                          {question.question}
                        </h3>
                        <div className="flex h-7 w-7 items-center justify-center">
                          <ChevronDownIcon className="h-6 w-6 text-[var(--label-muted)] transition duration-300 ease-out group-radix-state-open:rotate-180" />
                        </div>
                      </Collapsible.Trigger>
                      <Collapsible.Content className="collapsible-animation overflow-hidden ">
                        <p className="max-w-2xl pb-6 text-base leading-normal text-[var(--label-muted)]">
                          {question.answer}
                        </p>
                      </Collapsible.Content>
                    </Collapsible.Root>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </Container>
    </div>
  )
}
