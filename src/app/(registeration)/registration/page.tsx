import { TreeDeciduous } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import  SignupForm  from "@/components/signup-form"

export default function Page() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 z-50">
      <div className="relative hidden lg:block bg-[#c0cfb2] z-50">
        <Image
          width={1080} height={1920} 
          src="https://images.pexels.com/photos/11985076/pexels-photo-11985076.jpeg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover brightness-70"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10 z-90 bg-white">
        <div className="flex justify-center gap-2 md:justify-start ">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <TreeDeciduous fill="black" />
            </div>
            TREEZY
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs ">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  )
}
