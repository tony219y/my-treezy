// app/home/page.tsx (สำหรับ App Router)
'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const token = searchParams.get('token');
    
    if (token) {
      // บันทึก token ลงใน localStorage
      localStorage.setItem('token', token);
      
      // สร้าง URL ใหม่โดยไม่มี token parameter
      const url = new URL(window.location.href);
      url.searchParams.delete('token');
      
      // ใช้ router.replace เพื่อเปลี่ยน URL โดยไม่มีการรีโหลด
      router.replace(url.pathname);
    }
  }, [router, searchParams]);

  return (
    <div>
      <h1>Home Page</h1>
      {/* คอนเทนต์อื่นๆ */}
    </div>
  );
}