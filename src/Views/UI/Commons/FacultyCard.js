import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 315,

    margin: "35px",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
  },
  cardHovered: {
    transform: "scale3d(1, 1, 1)",
  },
  media: {
    width: "315px",
    height: "350px",
  },
});

export default function FacultyCard({ details }) {
  const classes = useStyles();
  const img = details.photo;
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  });
  return (
    <Link to={`/faculty/${details.id}`} style={{ textDecoration: "none" }}>
      <Card
        className={classes.root}
        classes={{ root: state.raised ? classes.cardHovered : "" }}
        onMouseOver={() => setState({ raised: true, shadow: 3 })}
        onMouseOut={() => setState({ raised: false, shadow: 1 })}
        raised={state.raised}
        zdepth={state.shadow}
        style={{
          height: "30rem",
        }}
      >
        <CardMedia
          className={classes.media}
          image={require(`../../Assets/People/${details.image}`)}
          title={details.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {details.name}
          </Typography>
          <Typography color="primary" variant="h7">
            {details.email && details.email}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {details.designation}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
