'use client';

import { useEffect } from 'react';
import useSWR from 'swr';

type PostView = {
  slug: string;
  count: string;
};

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function ViewCounter({
  slug,
  trackView,
}: {
  slug: string;
  trackView: boolean;
}) {
  // const { data } = useSWR<PostView[]>('/api/views', fetcher);
  const { data, error } = useSWR('/api/views', fetcher);
  if (error) return ( 
    <div>failed to load</div>
  )
  if (!data) return (
    <div>loading...</div>
  )
  if (!Array.isArray(data)) return (
    <div>no view data!</div>
  )
  // return <div>hello {data.name}!</div>
  //if (Array.isArray(data)) const viewsForSlug = data && data.find((view) => view.slug === slug);
  const viewsForSlug = data;
  //  const viewsForSlug = data;
  
  // const views = new Number(viewsForSlug?.count || 0);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });

    if (trackView) {
      registerView();
    }
  }, [slug]);

  return (
    <p className="font-mono text-sm text-neutral-500 tracking-tighter">
      {/* {data ? `${views.toLocaleString()} views` : '​'} */}
      {data ? `${42} views` : '​'}
    </p>
  );
}
