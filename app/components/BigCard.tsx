import { Card, CardContent } from "@mui/material";
import React from "react";

type BigCard = {
    name:string;
    designation:string;
    comment:string;
    card?:string;
  };

const BigCard = ({name,designation,comment, card}:BigCard) => {
  return (
    <Card className="rounded-xl" sx={{ minWidth: (card === 'big' ? 500 : 375), height: 137, }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 2.5,
        }}
      >
        <div className="flex flex-row items-center gap-2">
          <div className="text-zinc-900 text-base font-semibold leading-tight">
            {name}
          </div>
          <div className="text-neutral-400 text-xs font-medium font-['Inter'] leading-none">
            {designation}
          </div>
        </div>
        <div className=" text-neutral-800 text-base font-medium font-['Inter'] leading-tight">
          {`"${comment}"`}
        </div>
      </CardContent>
    </Card>
  );
};

export default BigCard;
