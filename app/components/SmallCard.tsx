import React from 'react';

import { Card, CardContent, TextField, Typography } from '@mui/material';
import Image from 'next/image';

type ReusableNotificationCardProps = {
    imageSrc: string; 
    typographyText: string;
    extratypographyText?:string;
    additionalComponent: React.ReactNode; 
  };

const SmallCard = ({ imageSrc, typographyText, additionalComponent,extratypographyText }:ReusableNotificationCardProps) => {
  return (
    <Card sx={{ minWidth: 200, height: 175, borderRadius: '8.4px' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%' }}>
        <Image alt="bell" src={imageSrc} width={30} height={30} />
        <Typography
         sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {typographyText}
        </Typography>
        {additionalComponent}
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{extratypographyText}</Typography>
      </CardContent>
    </Card>
  );
};

export default SmallCard;
