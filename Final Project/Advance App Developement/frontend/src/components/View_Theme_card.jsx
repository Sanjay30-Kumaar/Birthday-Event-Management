import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";

export default function Theme_View_Card(cardContent) {
  
  const [cardContents, setCardContents] = useState(cardContent.cardContent);
  
  
  return (
    <>
      
        <Card sx={{ maxWidth: 345, margin: 5 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={cardContents.themeImageURL}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardContents.themeName}
            </Typography>
            <div className="fields">
              <Typography variant="body2" color="text.secondary">
                {cardContents.themeDescription}
              </Typography>
            </div>

            <div className="fields">
              <Typography variant="body2" color="text.secondary">
                <b>Photographer : </b> {cardContents.themePhotographer}
              </Typography>
            </div>

            <div className="fields">
              <Typography variant="body2" color="text.secondary">
                <b> Videographer : </b>
                {cardContents.themeVideographer}
              </Typography>
            </div>
            <div className="fields">
              <Typography variant="body2" color="text.secondary">
                <b>ReturnGift :</b> {cardContents.themeReturnGift}
              </Typography>
            </div>
            <div className="fields">
              <Typography variant="body2" color="text.secondary">
                <b>Cost : </b>
                {"$"}
                {cardContents.themeCost}
              </Typography>
            </div>
            {/* <CardActions>
             
              <Button
                onClick={() => {
                  setIsEditable(true);
                }}
                size="small"
              >
                <Edit style={{ color: "#349eeb" }} />
              </Button>
            </CardActions> */}
          </CardContent>
        </Card>
     
    </>
  );
}
