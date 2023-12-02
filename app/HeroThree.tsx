import { Divider } from '@mui/material'
import React from 'react'
import BigCard from './components/BigCard'

const HeroThree = () => {
  return (
    <div className="flex flex-col items-end justify-evenly">
    <div className="w-1/2 pr-[3.8rem]">
      <div className="text-right text-zinc-100 text-2xl mb-5 font-medium leading-loose">
        Testimonials
      </div>
    </div>

    <Divider
      sx={{ mb: 5, bgcolor: "white", mr: { sm: 0, lg: 8 } }}
      light={true}
      flexItem
    />

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
  )
}

export default HeroThree