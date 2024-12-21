import Link from "next/link";


export default function Home() {
  return (
    // <DynamicPage/>
    <div>
    <h1 className="text-center  text-4xl md:text-6xl mx-auto mt-[65px] ">Dyamic routes</h1>
    <button className="border py-2 px-8 rounded-lg bg-[black] text-[white] text-center items-center mx-auto px-[50px]  ml-[79px] md:ml-[35%] lg:ml-[45%] mt-8 hover:bg-[white] hover:text-[black]"><Link href={`product`}> Click here!</Link></button>
    </div>
  )
}
