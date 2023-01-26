import { Container } from '@/components/Container'
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

const Feature = ({ icon, title, description, image, position }) => {
  return (
    <div
      className={clsx(
        'flex justify-between gap-20',
        position === 'left' ? 'flex-row-reverse' : ''
      )}
    >
      <div className="flex-1"></div>
      <div className="flex flex-1 flex-col gap-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--bg-border)] bg-[var(--bg-sub)]">
          {icon}
        </div>

        <div className="text-4xl font-bold">{title}</div>
        <div className="text-lg">{description}</div>
      </div>
    </div>
  )
}

const features = [
  {
    title: 'Comment without a Notion account.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al. sed do eiusmod tempor incididunt ut labore.',
    image: screenshotPayroll,
    icon: <UserIcon />,
  },
  {
    title: 'Get notified in Notion Updates.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al. sed do eiusmod tempor incididunt ut labore.',
    image: screenshotExpenses,
    icon: <TimeIcon />,
  },
  {
    title: 'Manage comments in Notion pages.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al. sed do eiusmod tempor incididunt ut labore.',
    image: screenshotVatReturns,
    icon: <AdjustmentsIcon />,
  },
  {
    title: 'Email notification for commenters.',
    description:
      'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
    image: screenshotReporting,
    icon: <MailIcon />,
  },
]

export function Features() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className=""
    >
      <Container>
        <SectionTag text="FEATURES" />
        <div className="flex flex-col gap-20">
          {features.map((feature) => {
            return (
              <Feature
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                image={feature.image}
              />
            )
          })}
        </div>
      </Container>
    </section>
  )
}
