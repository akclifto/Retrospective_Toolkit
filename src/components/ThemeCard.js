/**
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//Custom CSS elements for an info card.
const useStyles = makeStyles({
  root: {
    maxWidth: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    margin: 10,
    boxShadow: 
      '0 1px 3px rgba(0,0,0,0.12)',
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    '&:hover': {
      boxShadow: '0 10px 13px rgba(0,0,0,0.25)'
    }
  }, 
  theme: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
  }
});

//TODO: img source doesn't work with raw github, need to change constants file to use cdn
const themeIcons = (theme, themeClass) => {
  return (
    theme.images.map((image, key) => (
      <div className={themeClass}>
        <Typography>{image.name}</Typography>
        <img src= 'https://d1g31diwtzkeb3.cloudfront.net/DiceThemes/Action/bar_chart.png' alt="Name"/>
      </div>
    ))
  )
}




const ThemeCard = (props) => {
  const classes = useStyles();

  return (
  
      <Card className={classes.root}  variant="outlined" >
        <CardContent>
          <Typography variant="h5" className={classes.title} color="textPrimary" gutterBottom align="center">
            Current theme is the {props.theme.title} theme.
          </Typography>
          {themeIcons(props.theme, classes.theme)}
        </CardContent>
        <CardActions className={classes.button}>
          <Button variant="contained" color="primary" onClick={props.clicked}>Select Theme</Button>
        </CardActions>
      </Card>

  )
}

export default ThemeCard;