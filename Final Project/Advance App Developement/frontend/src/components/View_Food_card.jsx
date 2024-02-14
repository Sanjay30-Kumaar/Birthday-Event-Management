import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function Food_View_Card(cardContent) {
    const [cardContents, setCardContents] = useState(cardContent.cardContent);

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 5,
        cursor: "pointer",
        // opacity: cardContents.isSelected ? 1 : 0.5,
      }}
   
    >
      <CardMedia
        component="img"
        alt="Event"
        height="140"
        image={cardContents.foodImageURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardContents.foodName}
        </Typography>
        <div className="fields">
          <Typography variant="body2" color="text.secondary">
            {cardContents.foodDescription}
          </Typography>
        </div>
        <div className="fields">
          <Typography variant="body2" color="text.secondary">
            <b>Cost : </b>$ {cardContents.foodCost}
          </Typography>
        </div>
        {cardContents.isSelected && (
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
