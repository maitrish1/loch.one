import React from "react";
import hero from "../public/hero.png";
import Image from "next/image";
import {
  Divider,
  Select,
  TextField,
} from "@mui/material";

import bell from "../public/Bell.svg";
import bell2 from "../public/bell.svg";
import clock from "../public/clock.svg";
import chart from "../public/bar-chart-2.svg";
import SmallCard from "./components/SmallCard";
import eye from "../public/Eye.svg";
import BigCard from "./components/BigCard";
function Main() {
  return (
    <div className="lg:w-7/12 w-full lg:overflow-y-scroll lg:h-full pt-[5.4rem] pl-5 pr-5 lg:pr-0 md:pl-[3.8rem] bg-black from-black via-black to-transparent bg-custom-svg bg-no-repeat bg-cover bg-center">
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
      <div className="flex flex-col items-end justify-evenly">
        <div className="w-1/2 pr-[3.8rem]">
          <div className="text-right text-zinc-100 text-2xl mb-5 font-medium leading-loose">
            Testimonials
          </div>
        </div>
        
        <Divider sx={{mb:5, bgcolor:'white', mr:{sm:0, lg:8}}} light={true} flexItem />

        <div className="flex lg:w-95 w-full overflow-x-auto flex-row gap-5 mb-10">
          <BigCard
            name="John F"
            designation="Ex Blackrock PM"
            comment="Love how Loch integrates portfolio analytics and whale watching into one unified app."
          />
          <BigCard
            name="Yash P"
            designation="Research, 3poch Crypto Hedge Fund"
            comment="I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!"
          />
          <BigCard
            card="big"
            name="Shiv S"
            designation="Co-Founder Magik Labs"
            comment="Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple."
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
