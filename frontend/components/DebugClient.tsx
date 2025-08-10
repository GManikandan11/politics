'use client';

import { useEffect } from 'react';

export default function DebugClient({ data }: { data: any }) {
  useEffect(() => {
    console.log('Client-side log:', data);
  }, [data]);

  return null;
}
