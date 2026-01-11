import { Publicity } from "@/components/Publicity/Publicity";
import { MainContainer } from "@/components/News/MainContainer";
import { OthersNews } from "@/components/News/OthersNews";

export default function Home() {
  return (
    <div>
      <Publicity />
      <MainContainer />
      <OthersNews />
    </div>
  );
}
