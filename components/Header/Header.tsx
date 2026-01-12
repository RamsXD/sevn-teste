import BackButton from "./components/BackButton";

export function Header() {
  return (
    <div className="flex w-full h-13.5 items-center justify-center bg-[#FFBD14]">
      <BackButton />
      <h1 className="text-2xl font-bold">SEVN NEWS</h1>
    </div>
  );
}
