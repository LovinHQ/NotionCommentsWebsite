import clsx from 'clsx'
import { Container } from '@/components/Container'
import PlayIcon from '@/images/icons/play.svg'

function StepBox({ title, description, className }) {
  return (
    <div
      className={clsx(
        `flex flex-col gap-8 rounded-3xl border border-[var(--bg-border)] bg-[var(--bg-base)] p-8`,
        className
      )}
    >
      <h3 className="text-2xl font-bold text-[var(--label-base)]">{title}</h3>
      <p className="text-lg font-normal leading-normal text-[var(--label-muted)]">
        {description}
      </p>
    </div>
  )
}

export function GettingStarted({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'border-[var(--bg-border)]] border-y bg-[var(--bg-sub)] py-20'
      )}
      {...props}
    >
      <Container>
        <div className="my-4 flex justify-center text-center text-4xl font-bold leading-tight text-[var(--label-title)] md:text-5xl">
          Get started in just one minute
        </div>
        <div className="mt-20 flex flex-col items-start gap-y-8 md:flex-row">
          <div className="flex flex-1 flex-col items-center gap-6">
            <div className="flex w-full items-center">
              <div className="invisible h-px grow bg-gradient-to-l from-transparent to-[var(--accent-base)]" />
              <div className="h=8 flex w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-base)] to-[var(--secondary-base)] text-xl font-bold text-[var(--accent-label)] md:-ml-8">
                1
              </div>
              <div className="invisible h-px grow bg-gradient-to-r from-transparent to-[var(--accent-base)] md:visible" />
            </div>
            <StepBox
              title="Sign in with your Notion account"
              description="Create a account by giving us access to your Notion Workspace. We are going to use the email of your Notion as the registered email."
              className="md:mr-4"
            />
          </div>
          <div className="flex flex-1 flex-col items-center gap-6">
            <div className="flex w-full items-center">
              <div className="invisible h-px grow bg-gradient-to-l from-transparent to-[var(--accent-base)] md:visible" />
              <div className="h=8 flex w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-base)] to-[var(--secondary-base)] text-xl font-bold text-[var(--accent-label)]">
                2
              </div>
              <div className="invisible h-px grow bg-gradient-to-r from-transparent to-[var(--accent-base)] md:visible" />
            </div>
            <StepBox
              title="Copy link and create embed"
              description="Go to your Notion and copy the page link. Click “Create am embed”  in NotionComments, paste the link and generate embed link."
              className="md:mx-2"
            />
          </div>
          <div className="flex flex-1 flex-col items-center gap-6">
            <div className="flex w-full items-center">
              <div className="invisible h-px grow bg-gradient-to-l from-transparent to-[var(--accent-base)] md:visible" />
              <div className="h=8 flex w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-base)] to-[var(--secondary-base)] text-xl font-bold text-[var(--accent-label)] md:-mr-8">
                3
              </div>
              <div className="invisible h-px grow bg-gradient-to-r from-transparent to-[var(--accent-base)]" />
            </div>
            <StepBox
              title="Paste embed in your Notion post"
              description="Copy the generated link, paste it in Notion and click “Create embed”. Adjust the size of comment embed and you’re done! "
              className="md:ml-4"
            />
          </div>
        </div>
        <div className="mt-8 flex w-full gap-8">
          <div className="flex-1 max-lg:hidden" />
          <div className="flex flex-1 place-content-center">
            {/* <div className="absolute -mt-4 h-24 w-80 bg-gradient-to-r from-[var(--accent-base)] to-[var(--secondary-base)]" /> */}
            <button
              onClick={() => {
                window.open(
                  'https://twitter.com/NotionComments/status/1602305606592913408?s=20'
                )
              }}
              className="accent-border group z-10 flex h-16 w-full gap-4 rounded-3xl bg-[var(--bg-base)] p-3 transition duration-300 ease-out hover:bg-gradient-to-br hover:from-[var(--accent-base)] hover:to-[var(--secondary-base)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-border)] transition duration-300 ease-out group-hover:bg-[var(--bg-base)] ">
                <PlayIcon className="h-6 w-6 text-[var(--accent-label)] transition duration-300 ease-out group-hover:text-[var(--accent-base)]" />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex text-start text-base font-bold leading-none text-[var(--label-base)] transition duration-300 ease-out group-hover:text-[var(--accent-label)]">
                  Prefer videos?
                </div>
                <div className="mt-2 flex text-start text-sm font-normal leading-none text-[var(--label-base)] transition duration-300 ease-out group-hover:text-[var(--accent-label)]">
                  Check this tweet on how it works!
                </div>
              </div>
            </button>
          </div>
          <div className="flex-1 max-lg:hidden" />
        </div>
      </Container>
    </div>
  )
}
