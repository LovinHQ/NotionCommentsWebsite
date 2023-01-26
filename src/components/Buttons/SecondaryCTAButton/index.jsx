import clsx from 'clsx'

const SecondaryCTAButton = ({
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
          group flex h-14 gap-4 rounded-full border border-[var(--bg-border)] bg-[var(--bg-sub)] text-base font-bold text-[var(--label-base)]
          ${isIcon === false ? 'px-6' : text === null ? 'px-4' : 'pl-4 pr-6'}
          disabled:text-[var(--label-faint))] select-none items-center
          justify-center transition duration-150 ease-out 
          hover:cursor-pointer hover:border-[var(--bg-border-strong)] hover:bg-[var(--bg-shade)] focus:ring-2
          focus:ring-[var(--label-base)] focus:ring-offset-2 focus:ring-offset-[var(--bg-base)] disabled:cursor-default
          `,
        className
      )}
    >
      {children}
      {text && (
        <span
          className={`text-[var(--label-base)] transition duration-150 ease-out group-hover:text-[var(--label-title)] group-disabled:text-[var(--label-faint)]`}
        >
          {text}
        </span>
      )}
    </button>
  )
}

export default SecondaryCTAButton
