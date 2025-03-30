'use client';

import Treepreview from "@/components/Treepreview";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-[#f1ebe1]">
      {/* Section 1 */}
      <div className="relative flex justify-center items-center w-full h-[400px]">
        {/* Background */}
        <div
          className="absolute top-0 left-0 w-full h-[400px]"
          style={{ 
            backgroundImage: "url('/summer-tree.jpg')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            filter: 'brightness(0.5)' 
          }}
        />
        {/* Inside */}
        <div className="flex flex-col justify-center items-center gap-4 z-10">
            <h1 className="text-white text-9xl font-bold max-md:text-7xl">TREEZY</h1>
            <p className="text-white text-xl font-light max-md:text-base"> 
              - Let&apos;s trees be your friends- 
            </p>
            <Button onClick={()=>router.push("/login")} className="w-[200px] bg-[#c0cfb2] hover:bg-[#44624a] hover:text-white duration-300">Join Us</Button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col h-full items-center gap-4 z-10 px-[65px] py-4">
        <Treepreview/>
      </div>
    </div>
  );
};

export default Page;