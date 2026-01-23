
'use client';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';

const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('topic') || '';

    const [searchQuery, setSearchQuery] = useState(query);

    useEffect(() => {
        if (query !== searchQuery) {
            setSearchQuery(query);
        }
    }, [query, searchQuery]);
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            let newUrl = '';

            if (searchQuery) {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: 'topic',
                    value: searchQuery,
                });
            } else if (pathname === '/companions') {
                newUrl = removeKeysFromUrlQuery({
                    params: searchParams.toString(),
                    keysToRemove: ['topic'],
                });
            }

            const currentUrl = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
            if (!newUrl || newUrl === currentUrl) return;

            router.push(newUrl, { scroll: false });
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery, pathname, router, searchParams]);
    return (
        <div className='relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit'>
            <Image src="/icons/search.svg" alt="search" width={15} height={15} />
            <input
                type="text"
                placeholder='Search by topic...'
                className ='outline-none'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
  )
}

export default SearchInput
