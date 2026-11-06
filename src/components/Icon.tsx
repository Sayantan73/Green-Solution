import type { ReactNode } from 'react'

type IconName = 'leaf' | 'shield' | 'users' | 'headset' | 'trophy' | 'star' | 'briefcase' | 'cloud' | 'chart'

const paths: Record<IconName, ReactNode> = {
  leaf: <><path d="M20.8 3.2C12.4 3.1 5 6.8 5 13.7a6.3 6.3 0 0 0 6.3 6.3c7 0 9.6-8.5 9.5-16.8Z" /><path d="M3 22c3.4-5.3 7.6-9.4 13-13" /></>,
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
  headset: <><path d="M3 14v-3a9 9 0 0 1 18 0v3" /><path d="M5 14h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Zm12 0h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Zm2 7a4 4 0 0 1-4 3h-2" /></>,
  trophy: <><path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0V4Zm0 2H4v2a4 4 0 0 0 4 4m9-6h3v2a4 4 0 0 1-4 4" /><path d="M7 2h10v2H7z" /></>,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
  briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-13 5h18m-11 0v2h4v-2" /></>,
  cloud: <path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.6 4.6 0 1 1 0 9Z" />,
  chart: <><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-5 5m12-6h2v2" /></>,
}

export default function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}
