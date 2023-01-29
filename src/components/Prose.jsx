import clsx from 'clsx'

export function Prose({ as: Component = 'div', className, ...props }) {
  return (
    <Component
      className={clsx(
        className,
        'prose prose-slate max-w-none',
        // headings
        'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-medium prose-headings:text-[var(--label-title)]',
        // h1
        'prose-h1:text-3xl prose-h1:leading-[1.2] prose-h1:tracking-tight',
        // h2
        'prose-h2:text-2xl prose-h2:leading-[1.2] prose-h2:tracking-tight',
        // h3
        'prose-h3:text-xl prose-h3:leading-[1.2] prose-h3:tracking-tight',
        // lead
        'prose-lead:text-[var(--label-muted)]',
        // links
        'prose-a:font-semibold prose-a:text-[var(--label-link)]',
        // link underline
        'prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px]',
        // pre
        'prose-pre:rounded-xl prose-pre:bg-gray-900 prose-pre:shadow-lg',
        // hr
        'prose-hr:border-[var(--bg-border)]'
      )}
      {...props}
    />
  )
}
