/**
 * Base class of a text-based info card. It is expected to use a few paragraphs of text that will be
 * separated by line breaks.
 */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

// Custom CSS elements for an info card.
const useStyles = makeStyles({
  root: {
    width: "200%",
    height: "88%",
    maxHeight: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    margin: "10px 0px 0px 10px", // top right bottom left
    boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    "&:hover": {
      boxShadow: "0 10px 13px rgba(0,0,0,0.25)",
    },
  },
});

const InfoCard = (props) => {
  const classes = useStyles();
  const { title, body, body2, body3 } = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          variant="h4"
          className={classes.title}
          color="textPrimary"
          gutterBottom
          align="center"
        >
          {title}
        </Typography>
        <Typography variant="body1" component="p">
          {body}
        </Typography>
        <Typography className={classes.pos} component="p">
          <br />
          {body2}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {body3}
        </Typography>
      </CardContent>
      <CardActions />
    </Card>
  );
};
InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  body2: PropTypes.string.isRequired,
  body3: PropTypes.string.isRequired,
};

export default InfoCard;
