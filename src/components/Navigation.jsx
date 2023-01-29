import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export function Navigation({ navigation, className }) {
  let router = useRouter()

  return (
    <nav className={clsx('text-base', className)}>
      <ul role="list" className="space-y-8">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="text-lg font-bold text-[var(--label-base)] ">
              {section.title}
            </h2>
            <ul
              role="list"
              className="mt-4 space-y-4 border-l-2 border-[var(--bg-border)]"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={clsx(
                      'block w-full pl-4 transition duration-150 ease-out before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full ',
                      link.href === router.pathname
                        ? 'font-semibold text-[var(--accent-base)] before:bg-[var(--accent-base)]'
                        : 'text-[var(--label-muted)] before:hidden before:bg-[var(--bg-border-strong)] hover:text-[var(--label-base)] hover:before:block'
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
