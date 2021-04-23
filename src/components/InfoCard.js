import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import "../styles/InfoCard.css";

function SetInfoCard(props) {
  const { body, body2, body3 } = props;
  const [isClicked, setClicked] = useState(false);
  const [buttonText, setText] = useState("Show Demo");

  useEffect(() => {
    if (isClicked) setText("Hide Demo");
    else setText("Show Demo");
  }, [isClicked]);

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
      <CardActions className="infoCard-demo">
        <Button
          className="infocard-demo-button"
          variant="contained"
          color="primary"
          onClick={() => {
            setClicked(!isClicked);
          }}
        >
          {buttonText}
        </Button>

        {isClicked && (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/W8J6FHGf9lQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        )}
      </CardActions>
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
    const { title, body, body2, body3 } = this.props;

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
            <SetInfoCard body={body} body2={body2} body3={body3} />
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
};

SetInfoCard.defaultProps = {
  body3: "",
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  body2: PropTypes.string.isRequired,
  body3: PropTypes.string,
};

InfoCard.defaultProps = {
  body3: "",
};

export default InfoCard;
