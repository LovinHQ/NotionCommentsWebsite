import { Container } from '@/components/Container'
import Image from 'next/image'
import UserIcon from '@/images/icons/user.svg'
import TimeIcon from '@/images/icons/time.svg'
import AdjustmentsIcon from '@/images/icons/adjustments.svg'
import MailIcon from '@/images/icons/mail.svg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'
import SectionTag from './SectionTag'
import clsx from 'clsx'

const features = [
  {
    title: 'Comment without a Notion account',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al. sed do eiusmod tempor incididunt ut labore.',
    image: screenshotPayroll,
    icon: <UserIcon className="h-8 w-8" />,
    position: 'right',
  },
  {
    title: 'Get notified in Notion Updates',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al. sed do eiusmod tempor incididunt ut labore.',
    image: screenshotExpenses,
    icon: <TimeIcon className="h-8 w-8" />,
    position: 'left',
  },
  {
    title: 'Manage comments in Notion pages',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al. sed do eiusmod tempor incididunt ut labore.',
    image: screenshotVatReturns,
    icon: <AdjustmentsIcon className="h-8 w-8" />,
    position: 'right',
  },
  {
    title: 'Email notification for commenters',
    description:
      'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
    image: screenshotReporting,
    icon: <MailIcon className="h-8 w-8" />,
    position: 'left',
  },
]

const Feature = ({ icon, title, description, image, position }) => {
  return (
    <div
      className={clsx(
        'flex flex-col-reverse gap-8 md:gap-20',
        position === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
      )}
    >
      <div className="flex-1 overflow-hidden rounded-3xl border border-[var(--bg-border)] bg-[var(--bg-sub)] shadow-md">
        <Image src={image} alt={title} width="0" height="0" />
      </div>
      <div className="flex flex-1 flex-col gap-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-[20px] border border-[var(--bg-border)] bg-[var(--bg-sub)] text-[var(--label-faint)]">
          {icon}
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold leading-tight text-[var(--label-title)]">
            {title}
          </h2>
          <h3 className="flex text-left text-lg font-normal leading-normal text-[var(--label-muted)]">
            {description}
          </h3>
        </div>
      </div>
    </div>
  )
}

export function Features() {
  return (
    <Container id="features" aria-label="Features" className="gap-20">
      <div className="flex flex-col justify-center">
        <SectionTag text="FEATURES" />
        <h1 className="my-4 flex justify-center text-center text-4xl font-bold leading-tight text-[var(--label-title)] md:text-5xl">
          Engage with your audience
        </h1>
        <h3 className="m-auto flex max-w-4xl justify-center text-center text-lg font-normal leading-normal text-[var(--label-muted)]">
          NotionComments is the easiest way to add a comment section to a Notion
          post. It helps content creators and bloggers who use Notion to
          establish a better connection with their readers.
        </h3>
      </div>
      <div className="flex flex-col gap-20">
        {features.map((feature) => {
          return (
            <Feature
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              image={feature.image}
              position={feature.position}
            />
          )
        })}
      </div>
    </Container>
  )
}
