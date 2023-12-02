import React from "react";

import {
  Card,
  CardContent,
  Checkbox,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";

type ReusableNotificationCardProps = {
  name?: string;
  imageSrc: string;
  typographyText?: string;
  extratypographyText?: string;
  additionalComponent: React.ReactNode;
};

const SmallCard = ({
  imageSrc,
  typographyText,
  additionalComponent,
  extratypographyText,
  name,
}: ReusableNotificationCardProps) => {
  return (
    <Card sx={{ minWidth: 200, height: 175, borderRadius: "8.4px" }}>
      <CardContent
        sx={{
          gap: name === "three" ? 0.5 : 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Stack direction="row" width="100%" justifyContent="space-between">
          <Image alt="bell" src={imageSrc} width={30} height={30} />
          {name === "one" ? (
            <div className="text-right text-zinc-900 text-xs font-semibold leading-3">
              Save
            </div>
          ) : (
            <Checkbox checked sx={{ p: 0 }} />
          )}
        </Stack>
        <div className="text-zinc-900 text-sm font-medium leading-none">
          {typographyText}
        </div>
        {additionalComponent}
        <div className="text-zinc-900 text-sm font-medium leading-none">
          {extratypographyText}
        </div>
      </CardContent>
    </Card>
  );
};

export default SmallCard;
