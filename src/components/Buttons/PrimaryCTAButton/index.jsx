import clsx from 'clsx'

const PrimaryCTAButton = ({
  className,
  isIcon = true,
  text = null,
  splitbeeEvent = null,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      data-splitbee-event={splitbeeEvent}
      className={clsx(
        `
          group flex h-14 gap-4 rounded-full bg-[var(--accent-base)] text-base font-bold text-[var(--accent-label)]
          ${isIcon === false ? 'px-6' : text === null ? 'px-4' : 'pl-4 pr-6'}
          disabled:bg-[var(--accent-bg))] select-none
          items-center justify-center transition duration-150 
          ease-out hover:cursor-pointer hover:bg-[var(--accent-shade)]
          focus:ring-2 focus:ring-[var(--accent-base)] focus:ring-offset-2 focus:ring-offset-[var(--bg-base)] disabled:cursor-default
          `,
        className
      )}
    >
      {children}
      {text && (
        <span
          className={`text-[var(--accent-label)] transition duration-150 ease-out`}
        >
          {text}
        </span>
      )}
    </button>
  )
}

export default PrimaryCTAButton
