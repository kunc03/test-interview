import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "../components/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-10">
        <HomePage />
    </div>
  );
}
