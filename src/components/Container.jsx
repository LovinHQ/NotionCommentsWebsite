import clsx from 'clsx'

export function Container({ className, children, ...props }) {
  return (
    <div
      className={clsx(
        'mx-auto flex max-w-6xl flex-col justify-start px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
