import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import "../styles/InfoCard.css";

function SetInfoCard(props) {
  // const classes = useStyles();
  const { body, body2, body3 } = props;

  return (
    <Card className="infoCard--root" variant="outlined">
      <CardContent>
        <div>
          <Typography variant="body1" component="p">
            {body}
          </Typography>
          <Typography component="p">
            <br />
            {body2}
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            {body3}
          </Typography>
        </div>
      </CardContent>
      <CardActions />
    </Card>
  );
}

class InfoCardTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showActivityInfo: false };
    // eslint rules force og constructor, bind the functions
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState((state) => ({ showActivityInfo: !state.showActivityInfo }));
  }

  render() {
    const { showActivityInfo } = this.state;
    const { title, body, body2, body3 } = this.props;

    return (
      <div>
        <button
          className="titleButton"
          type="button"
          onClick={this.clickHandler}
        >
          <Typography
            variant="h4"
            // className={classes.title}
            color="textPrimary"
            gutterBottom
            align="center"
          >
            {title}
          </Typography>
        </button>
        {showActivityInfo ? (
          <div>
            <SetInfoCard body={body} body2={body2} body3={body3} />
          </div>
        ) : null}
      </div>
    );
  }
}

SetInfoCard.propTypes = {
  // title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  body2: PropTypes.string.isRequired,
  body3: PropTypes.string.isRequired,
};

InfoCardTest.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  body2: PropTypes.string.isRequired,
  body3: PropTypes.string.isRequired,
};

export default InfoCardTest;
