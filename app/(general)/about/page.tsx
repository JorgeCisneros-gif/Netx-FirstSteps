import  type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'About Title',
 description: 'SEO description',
 keywords:['About Page','Jorge','informacion']
};


export default function AboutPage() {
  return (

   <span className="text-5xl font-bold">About Page</span>

  );
}
