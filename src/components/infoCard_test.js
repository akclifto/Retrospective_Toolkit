import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    width: "90%",
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
    titleButton: {
      textDecoration: "none",
      width: "50%",
    },
  },
});

function InfoCard(props) {
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
          <div className={classes.root}>
            {title}
            Cube Game
          </div>
        </Typography>
        <div>
          <Typography variant="body1" component="p">
            {body}
            body1
          </Typography>
          <Typography component="p">
            <br />
            {body2}
            body2
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            {body3}
            body3
          </Typography>
        </div>
      </CardContent>
      <CardActions />
    </Card>
  );
}

class infoCardTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showGameInfo: true };
    // eslint rules force og constructor, bind the functions
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    // eslint-disable-next-line no-undef
    this.setState((state) => ({ showGameInfo: !state.showGameInfo }));
  }

  render() {
    const { showGameInfo } = this.state;

    return (
      <div>
        <button className="root" type="button" onClick={this.clickHandler}>
          Cube Game
        </button>
        {showGameInfo ? (
          <div>
            <InfoCard onClick={this.clickHandler} />
          </div>
        ) : null}
      </div>
    );
  }
}

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  body2: PropTypes.string.isRequired,
  body3: PropTypes.string.isRequired,
};

export default infoCardTest;
