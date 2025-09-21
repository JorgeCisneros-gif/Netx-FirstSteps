import  type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Contact Title',
 description: 'SEO description',
 keywords:['Contact Page','Jorge','informacion']
};



export default function ContactPage() {
  return (
   <>
   <span className="text-2xl font-bold">Contact Page</span>
   </>
  );
}
