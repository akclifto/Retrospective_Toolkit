import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import "../styles/InfoCard.css";

function SetInfoCard(props) {
  const { body, body2, body3, buttonName, buttonOnClick } = props;

  let button;
  if (buttonName) {
    button = (
      <Button variant="contained" color="primary" onClick={buttonOnClick}>
        {buttonName}
      </Button>
    );
  }
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
      <CardActions> {button} </CardActions>
    </Card>
  );
}

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showActivityInfo: false };
    // eslint rules force og constructor, bind the functions
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    this.setState((state) => ({ showActivityInfo: !state.showActivityInfo }));
  };

  render() {
    const { showActivityInfo } = this.state;
    const { title, body, body2, body3, buttonName, buttonOnClick } = this.props;

    return (
      <div className="container">
        <button
          className="title-button"
          type="button"
          onClick={this.clickHandler}
        >
          <Typography
            variant="h4"
            color="textPrimary"
            gutterBottom
            align="center"
          >
            {title}
          </Typography>
        </button>
        {showActivityInfo ? (
          <div className="info-open">
            <SetInfoCard
              body={body}
              body2={body2}
              body3={body3}
              buttonName={buttonName}
              buttonOnClick={buttonOnClick}
            />
          </div>
        ) : (
          <div className="info-close" />
        )}
      </div>
    );
  }
}

SetInfoCard.propTypes = {
  body: PropTypes.string.isRequired,
  body2: PropTypes.string.isRequired,
  body3: PropTypes.string,
  buttonName: PropTypes.string,
  buttonOnClick: PropTypes.func,
};

SetInfoCard.defaultProps = {
  body3: "",
  buttonName: "",
  buttonOnClick: () => {},
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  body2: PropTypes.string.isRequired,
  body3: PropTypes.string,
  buttonName: PropTypes.string,
  buttonOnClick: PropTypes.func,
};

InfoCard.defaultProps = {
  body3: "",
  buttonName: "",
  buttonOnClick: () => {},
};

export default InfoCard;
