import clsx from 'clsx'

const TertiaryButton = ({ className, isIcon = true, text = null, size = 'big', splitbeeEvent = null, children, ...props }) => {
    return (
        <button {...props} data-splitbee-event={splitbeeEvent} className={clsx(`
          ${size === 'big' 
            ? 'h-10 gap-1.5 rounded-xl text-base' 
            : 'h-8 gap-1 rounded-lg text-xs'}
          ${size === 'big'
            ? isIcon === false ? 'px-4' : text === null ? 'px-2' : 'pl-2 pr-3'
            : isIcon === false ? 'px-2' : text === null ? 'px-2' : 'px-2'}
          group relative flex select-none items-center justify-center gap-1 font-medium
          outline-none 
          transition
          duration-150 ease-in-out hover:cursor-pointer hover:bg-[var(--bg-shade)]
          disabled:cursor-default 
          `, className)}>
          {children}
          { text && <span className={`text-[var(--label-muted)] group-hover:text-[var(--label-title)] group-disabled:text-[var(--label-faint)]`}>{text}</span> }
        </button>
    )
}

export default TertiaryButton;