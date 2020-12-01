/**
 * Base class of a text-based info card. It is expected to use a few paragraphs of text that will be 
 * separated by line breaks.
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

//Custom CSS elements for an info card.
const useStyles = makeStyles({
  root: {
    maxWidth: '500px',
    maxHeight: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    margin: 10,
    boxShadow: 
      '0 1px 3px rgba(0,0,0,0.12)',
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    '&:hover': {
      boxShadow: '0 10px 13px rgba(0,0,0,0.25)'
    }
  },
});


const InfoCard = (props) => {
  const classes = useStyles();

  return (
  
      <Card className={classes.root}  variant="outlined" >
        <CardContent>
          <Typography variant="h4" className={classes.title} color="textPrimary" gutterBottom align="center">
            {props.title}
          </Typography>
          <Typography variant="body1" component="p">
            {props.body}
          </Typography>
          <Typography className={classes.pos} component="p">
            <br></br>
            {props.body2}
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            {props.body3}
          </Typography>
          {props.content}
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={props.clicked}>{props.buttonText}</Button>
        </CardActions>
      </Card>

  )
}
InfoCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  body2: PropTypes.string,
  body3: PropTypes.string,
  clicked: PropTypes.any
}

export default InfoCard;