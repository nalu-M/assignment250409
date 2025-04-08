'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigations = [
    { id: 1, name: "ホーム", href: "/" },
    { id: 2, name: "リスト", href: "/list" },
    { id: 3, name: "マイページ", href: "/mypage" },
    { id: 4, name: "送信", href: "/form" },
    { id: 5, name: "ログイン", href: "/login" },
    { id: 6, name: "登録", href: "/signup" },
];

export default function NavLinks() {
    
    const pathname = usePathname();

    return (
        <ul className="flex space-x-6">
            {navigations.map((navigation) => {
                return (
                    <Link
                        key={navigation.name}
                        href={navigation.href}
                        className={pathname === navigation.href
                             ? "underline font-bold text-blue-400 hover:text-blue-500"
                             : "hover:text-gray-300"
                        }
                    >
                        {navigation.name}
                    </Link>
            
                );
            })}
        </ul>
    );
}