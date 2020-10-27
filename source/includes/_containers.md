# Containers

This folder contains container components which are used to hold and group together other components.

## DiceLanding.js

> Functions contained within DiceLanding.js

```javascript
//Directs the browser to statefarm for more information in new tab.
const redirect = (e) => {
  e.preventDefault();
  const url = "http://statefarm.com";
  window.open(url, '_blank');
}
```

> JSX returned by DiceLanding.js

```jsx
<div>
  <Header/>
  <Grid className={classes.root} 
    container direction="row" justify="center" alignItems="center">
      <Grid item xs={5}>
        <InfoCard
          title="Cube Game"
          body="This cube game is intended to promote communication
           and understanding within a team."
          body2="How To Play:"
          body3="First, choose an action dice, then roll it.
            It will roll on a side with a picture. 
            Describe how the picture relates to an experience in 
            software development you have had."
          clicked={redirect}
          />
      </Grid>
    {/** Creates a Die object, contains variable properties*/}
    <Grid item xs={5}>
    <div className={classes.dice}>
    <Die 
      numSides={sidesConst.SIX.sides}
      title={themeConst.Action}
    />
    </div>
  </Grid>
</Grid>
</div>
```

This class will be used as a container component that holds the other components in the landing page