import  type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Price Title',
 description: 'SEO description',
 keywords:['Price Page','Jorge','informacion']
};


export default function PricePage() {
  return (
   <>
   <span className="text-2xl font-bold">Price Page</span>
   </>
  );
}
