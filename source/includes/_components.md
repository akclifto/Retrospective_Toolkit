# Components

This folder contains all of the projects react components. These are pieces of jsx which are loaded within other components. Full page components are stored within the pages folder.

## Die.js

> Die.js variables and functions

```javascript
  // create hooks
  const [diceResult, setDiceResult] = useState(0);
  let displayText = "This die has " + props.numSides + " sides and is an " + props.title + " die.";

  //Pass the reference to this function to DieModel.js
  const updateResult = (rollResult) => {
      setDiceResult(rollResult);
  };

  // check dice result and display result
  if (diceResult !== 0) {
    displayText = "You rolled a " + diceResult + "!";
  }
```

> JSX returned to DiceLanding.js

```jsx
<Card className={dieClass.card}>
  <Typography >
    {displayText}
    </Typography>
  <DiceModel
    result={updateResult}
    css={dieClass.dieButton}
    />
</Card>
```

Die.js represents a card that the dice and the button handler will live on

<aside class="notice">
At present, until the dice game is finished in Unity, we have a temporary dice game which has been created using the <a href='https://github.com/AdamTyler/react-dice-complete'>react-dice-complete</a> library.
</aside>

## DiceModel.js

> DieModel.js variables and functions

```javascript
  let reactDice;

  const rollAll = () => {
    reactDice.rollAll()
    props.result(num)
  }

  const rollButton = (
    <Button 
      variant="contained" 
      onClick={rollAll}
      color="primary">
        Roll Dice
    </Button>
  )

  DiceModel.propTypes = {
    result: PropTypes.func,
  };
```

> JSX returned by DiceModel.js

```jsx
<div className={props.css}>
  <ReactDice
    numDice={1}
    defaultRoll={7}
    numDice={2}
    rollDone={rollDoneCallback}
    disableIndividual={true}
    defaultRoll={7}
    faceColor={theme.palette.secondary.main}
    dotColor={"#FFFFFF"}
    outline={true}
    ref={dice => reactDice = dice}
  />
  <br></br>
  {rollButton}
</div>
```

This component represents the dice themselves, the rolling, and the functionality needed to roll them

## Emoji.js
> JSX returned by Emoji.js

```jsx
<div
  className="emoji"
  role="img"
  aria-label={props.label ? props.label : ""}
  aria-hidden={props.label ? "false" : "true"}
  >
  {props.symbol}
</div>
```
This file allows emoji images to be used within the project.

## Header.js

> Notable functions

```javascript
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ target: undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};
```

> JSX returned by Header.js

```jsx
<React.Fragment>
  <HideOnScroll {...props}>
    <AppBar className={classes.toolbar}>
      <Toolbar className={classes.root}>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
        <div className={classes.grow} />
        <Link to='/login' className={classes.menuButton} >
          <Button>
            <SettingsApplicationsSharpIcon color="black" fontSize="large" />
            Login
        </Button>
        </Link>
      </Toolbar>
    </AppBar>
  </HideOnScroll>
  <Toolbar />
</React.Fragment>
```

This is a stateless component that displays the header for all of the landing pages.

## ifAuth.js

> Functions contained within ifAuth.js

```javascript
// Set up the class constructor and create initial state
constructor() {
  super();
  this.state = {
    loading: true,
    redirect: false,
  };
}

// On mount, make a call to the checksession api
// if call is OK, allow access to protected route
componentDidMount() {
  axios.get('/api/checksession')
    .then(res => {
      if (res.status === 204 || res.status === 200) {
        this.setState({ loading: false });
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    // if there is an error, do not allow access
    .catch(err => {
      this.setState({ loading: false, redirect: true });
    });
}

render() {
  const { loading, redirect } = this.state;
  if (loading) {
    // page is still checking session
    return null;
  }
  if (redirect) {
    // user is not authorized
    return <Redirect to="/login" />;
  }
  // user is authorized
  return <ComponentToProtect {...this.props} />;
}
```
This is a higher order component which is used to protect the [routes](#routes-js) of the application which require authentication.

When a protected route is called in the browser, this component is wrapped around it and acts as a gatekeeper.The protected component is taken as an argument to this higher order component and stored in as an argument named 
<code>ComponentToProtect</code>. If the user is authenticated, they will be redirected to the protected page. Otherwise, they are redirected to the login page.

### Table of Component States

Loading| Redirect | Outcome
--------- | ------- | -----------
true | false | Initial state
false | false | Unauthorized: Redirect to /login
false | true | Authorized: Redirect to protected page

## infoCard.js

> JSX returned by infoCard.js

```jsx
<Card className={classes.root}  variant="outlined" >
  <CardContent>
    <Typography variant="h4" className={classes.title} 
      color="textPrimary" gutterBottom align="center">
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
  </CardContent>
  <CardActions>
    <Button variant="contained" color="primary" onClick={props.clicked}>Learn More</Button>
  </CardActions>
</Card>
```

This is the base class of a text-based info card. It is expected to use a few paragraphs of text that will be separated by line breaks.

## Footer.js

> JSX returned by Footer.js

```jsx
<React.Fragment>
  <AppBar className={classes.footer}>
      <Toolbar className={classes.root}>
          <Typography className={classes.footer__text}>&copy; 2020 - Retrospective Toolkit</Typography>
          <div className={classes.grow} />
          <Typography className={classes.footer__text}>Developed by High Rollers</Typography>
      </Toolbar>
  </AppBar>
</React.Fragment>
```

This component serves as the footer element for the application which will be displayed at the bottom of each page.