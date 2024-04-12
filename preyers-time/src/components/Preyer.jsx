import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Preyer() {
  return (
    <>
      <div>Preyer</div>
      <Card sx={{  }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://wepik.com/api/image/ai/9a07baa7-b49b-4f6b-99fb-2d2b908800c2"
            alt="green iguana"
          />
          <CardContent >
           
              <h1>الفجر</h1>
            
        <Typography variant="h3" color="text.secondary">
              

            </Typography>
            <h1 className="title"> 5:23 ص</h1>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
