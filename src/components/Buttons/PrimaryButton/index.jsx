import clsx from 'clsx'

const PrimaryButton = ({
  className,
  isIcon = true,
  text = null,
  size = 'big',
  splitbeeEvent = null,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      data-splitbee-event={splitbeeEvent}
      className={clsx(
        size === 'big'
          ? 'h-10 gap-1.5 rounded-xl text-base'
          : 'h-8 gap-1 rounded-lg text-xs',
        size === 'big'
          ? isIcon === false
            ? 'px-4'
            : text === null
            ? 'px-2'
            : 'pl-2 pr-3'
          : isIcon === false
          ? 'px-2'
          : text === null
          ? 'px-2'
          : 'px-2',
        `group flex select-none items-center justify-center gap-1 bg-[var(--accent-base)] font-semibold
          outline-none transition duration-150 ease-out
          hover:cursor-pointer hover:bg-[var(--accent-shade)] focus:ring-2 focus:ring-[var(--accent-base)] 
          focus:ring-offset-2 focus:ring-offset-[var(--bg-base)] disabled:cursor-default disabled:bg-[var(--accent-bg)]
          `,
        className
      )}
    >
      {children}
      {text && (
        <span
          className={`font-semibold text-[var(--accent-label)] transition duration-150 ease-out group-disabled:text-[var(--accent-muted)]`}
        >
          {text}
        </span>
      )}
    </button>
  )
}

export default PrimaryButton
