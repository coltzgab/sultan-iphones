import type { ReactNode } from 'react'

interface PillButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  target?: string
  tone?: 'dark' | 'ghost'
  fullWidth?: boolean
}

export function PillButton({
  children,
  onClick,
  href,
  target,
  tone = 'dark',
  fullWidth = false,
}: PillButtonProps) {
  const className = ['pill-button', `pill-button--${tone}`, fullWidth ? 'pill-button--full' : '']
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a className={className} href={href} onClick={onClick} target={target} rel="noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button className={className} onClick={onClick} type="button">
      {children}
    </button>
  )
}
