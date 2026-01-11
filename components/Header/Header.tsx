"use client";

import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex w-full h-13.5 items-center justify-center bg-[#FFBD14]">
      {pathname !== "/" && <button onClick={() => router.back()}>Voltar</button>}
      <h1 className="text-2xl font-bold">SEVN NEWS</h1>
    </div>
  );
}
