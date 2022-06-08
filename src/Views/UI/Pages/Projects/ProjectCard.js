import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Trim from "../../../../Application/utils/Trim";
const ProjectCard = ({ details }) => {
  return (
    <div>
      <Card style={{ width: 350, height: 450 }}>
        <CardMedia
          component="img"
          height="140"
          image={require("../../../Assets/Projects/Projects.jpg")}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {details.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Trim desc={details.description} len="250" />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Know More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCard;
