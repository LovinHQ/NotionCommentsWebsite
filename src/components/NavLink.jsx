import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-xl py-2 px-4 text-base text-[var(--label-base)] hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}
