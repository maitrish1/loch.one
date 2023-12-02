import Image from 'next/image'
import React from 'react'
import eye from "../public/Eye.svg";
import hero from "../public/hero.png";

const Herotwo = () => {
  return (
    <div className="flex flex-col md:flex-row mb-2">
    <div className="lg:w-1/2 w-full">
      <Image
        className="rounded-xl"
        src={hero}
        width={338}
        height={338}
        alt="hero"
      />
    </div>

    <div className="w-full lg:w-1/2 pr-5 lg:pr-[3.8rem] text-right pt-5 flex flex-col gap-5">
      <div className="flex justify-end">
        <Image className="" src={eye} width={30} height={30} alt="eye" />
      </div>

      <div className="text-zinc-100 text-3xl font-medium leading-9">
        Watch what the whales are doing
      </div>
      <div className="opacity-70 text-right text-zinc-100 text-base font-medium leading-tight">
        All whales are not equal. Know exactly what the whales impacting
        YOUR portfolio are doing.
      </div>
    </div>
  </div>
  )
}

export default Herotwo