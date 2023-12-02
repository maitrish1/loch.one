import Image from 'next/image'
import React from 'react'
import bell from "../public/Bell.svg";
import bell2 from "../public/bell.svg";
import clock from "../public/clock.svg";
import chart from "../public/bar-chart-2.svg";
import SmallCard from "./components/SmallCard";
import { Select, TextField } from '@mui/material';
const HeroOne = () => {
  return (
    <div className="flex flex-col lg:flex-row mb-18 gap-10">
    <div className="w-1/2 pr-7 leading-9 flex flex-col justify-between gap-5 -mt-2">
      <Image alt="bell" src={bell} width={30} height={30} />
      <div className="w-80 text-zinc-100 text-3xl font-medium font-outline-1 text-shadow-lg leading-9">
        Get notified when a highly correlated whale makes a move
      </div>
      <div className="w-80 opacity-70 text-zinc-100 text-base font-medium leading-tight">
        Find out when a certain whale moves more than any preset amount
        on-chain or when a dormant whale you care about becomes active.
      </div>
    </div>
    <div className="flex w-full lg:w-1/2 overflow-x-auto flex-row gap-5 ">
      <SmallCard name='one'
        imageSrc={bell2}
        typographyText="We’ll be sending notifications to you here"
        additionalComponent={
          <TextField disabled size="small" value="hello@gmail.com" />
        }
      />
      <SmallCard
        imageSrc={chart}
        typographyText="Notify me when any wallets move more than"
        additionalComponent={<Select disabled size="small" defaultValue="$1,000" />}
      />

      <SmallCard name='three'
        imageSrc={clock}
        typographyText="Notify me when any wallet dormant for"
        additionalComponent={<Select disabled size="small" defaultValue="$1,000" />}
        extratypographyText="becomes active"
      />
    </div>
  </div>
  )
}

export default HeroOne