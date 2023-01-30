import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useId } from 'react'
import MailIcon from '@/images/icons/mail.svg'

const importedIcons = {
  mail: <MailIcon className="h-6 w-6 text-[var(--label-muted)]" />,
}

function GridPattern({ width, height, x, y, squares, ...props }) {
  let patternId = useId()

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}

function CardPattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#fff0df] to-[#ffe7e3] opacity-0 transition duration-300 group-hover:opacity-100"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

export function QuickLinkCard({ href, title, description, icon }) {
  const pattern = {
    y: 16,
    squares: [
      [0, 1],
      [1, 3],
    ],
  }
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-[var(--bg-sub)] transition-shadow hover:shadow-md hover:shadow-orange-900/5"
    >
      <CardPattern {...pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[var(--bg-border)] group-hover:ring-orange-900/10 " />
      <div className="relative rounded-2xl px-4 pt-12 pb-4">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--bg-border)] bg-[var(--bg-shade)]`}
        >
          {importedIcons[icon]}
        </div>
        <h3 className="text-[var(--label-title mt-4 text-sm font-semibold leading-7">
          <Link href={href}>
            <span className="absolute inset-0 rounded-2xl" />
            {title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-[var(--label-muted)]">{description}</p>
      </div>
    </div>
  )
}

export function QuickLinkCards({ children }) {
  return (
    <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {children}
    </div>
  )
}
