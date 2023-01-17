import Image from 'next/image'
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
        <div className="h-12 w-12 flex justify-center items-center rounded-full border border-[var(--bg-border)] bg-[var(--bg-sub)]">
           {icon}
        </div>

        <div className="text-4xl font-bold">{title}</div>
        <div className="text-lg">{description}</div>
      </div>
    </div>
  )
}

export default Feature
