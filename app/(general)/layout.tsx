import { Navbar } from "@/components/navbar";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar/>
    <main className="flex flex-col item-center p-24">
    <span className="text-lg">Hola Mundo</span>
    {children}
    </main>
    
    </>
  );
}