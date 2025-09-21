'use client';
import Link from 'next/link';

import '@/app/globals.css'
import { usePathname } from 'next/navigation';

interface Props {
    path: string;
    text: string;
}
export const ActiveLink = ({ path, text }: Props) => {

  const pathname = usePathname();

  return (
     <Link  className={`link ${pathname === path ? 'active-link' : ''}`}
     key={path}
     href={path}>
    {text}
    </Link>
  )
}
