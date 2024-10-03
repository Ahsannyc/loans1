import Image from "next/image";

import Header from '@/app/component/header'
import Footer from "./component/footer";
export default function Home() {
  return (
    <div>
      <Header />
      <h1 className="text-center text-5xl text-black font-bold">Mortgage Loans</h1>
      <h3 classname="text-center text-2xl text-red font-bold"> We can take care of all your mortgage loan needs and help you get the best possible option</h3>
      <Image src="/14loanslogo.png" alt="logo" width={500} height={100} />


      <Footer/>
    </div>
  );
}