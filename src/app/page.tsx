import Image from "next/image";
import Footer from "./components/Footer";
import Mid from "./components/Mid";
import { auth } from '@clerk/nextjs'
import { redirect } from "next/navigation";
export default function Home() {
  // const { userId } = auth();
  // if (userId){
  //   redirect('/');
  // }
  return (
    <>
    <div>
      <Mid/>
      <Footer/>
    </div>
    </>
  );
    
}
