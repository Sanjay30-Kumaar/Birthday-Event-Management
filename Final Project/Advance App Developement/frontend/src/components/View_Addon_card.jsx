import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function Addon_View_Card(cardContent) {
  const [cardContents, setCardContents] = useState(cardContent.cardContent);

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 5,
        cursor: "pointer",
        // opacity: cardContent.isSelected ? 1 : 0.5,
      }}
      // onClick={handleClick}
    >
      <CardMedia
        component="img"
        alt="Event"
        height="140"
        image={cardContents.addonImageURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardContents.addonName}
        </Typography>
        <div className="fields">
          <Typography variant="body2" color="text.secondary">
            {cardContents.addonDescription}
          </Typography>
        </div>
        <div className="fields">
          <Typography variant="body2" color="text.secondary">
            <b>Cost : </b>$ {cardContents.addonPrice}
          </Typography>
        </div>
        {cardContent.isSelected && (
          <div className="fields">
            <Typography variant="div" color="green">
              <b>Selected</b>
            </Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
