import { IBM_Plex_Sans } from "next/font/google";

const IBM = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Header() {
  return (
    <div className="flex w-full h-14 items-center justify-center bg-amber-400">
      <h1 className={`${IBM.className} text-2xl font-bold`}>SEVN NEWS</h1>
    </div>
  );
}
