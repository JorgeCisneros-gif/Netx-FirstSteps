import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
        <main className="flex  flex-col items-center  p-24">
          <span className="text-5xl font-bold">Hola mundo</span>

    <Link href="/about" className="mt-5 text-blue-500 underline">
      Ir a about
    </Link>

        </main>
    
  );
}
