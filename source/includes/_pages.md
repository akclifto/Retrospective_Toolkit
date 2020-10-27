# Pages

This folder contains all of the JSX files which represent an entire page within the application

## AuthLandingPage.jsx

> JSX returned by AuthLandingPage.jsx

```jsx
<div class="centered">
    <img src={bg} 
        alt="fin"
        height={318}
        width={546} 
    />
</div>
```

Presently, this is a placeholder for a page which is on a protected route. For the moment, this is merely used to insure authentication is working properly.

## LandingPage.jsx

> JSX returned by LandingPage.jsx

```jsx
<DiceLanding />
```

This page represents the homepage. In this instance, the DiceLanding is the component we are using to represent that page, and so it is returned here.

## Login.jsx
> Hooks contained within ifAuth.js

```javascript
// These hooks ref the input values
// of the email and password forms
const email = useRef();
const password = useRef();
```

> Notable functions contained within Login.jsx

```javascript
// This calls Login.js and passes the
// email and password as arguments
async function handleSubmit (e) {
  e.preventDefault();
  const isAuth = await loginController(
    email.current.value, 
    password.current.value);

  // if logged in, this will take the user to the
  // protected homepage
  if(isAuth) {
    props.history.push('/');
  }
}
```

> JSX returned by Login.jsx

```jsx
  <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} 
      elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate 
          onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            inputRef={email}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            inputRef={password}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={ReactLink} to="/signup" 
                variant="body2">
                Need an account? Sign up
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </form>
      </div>
    </Grid>
  </Grid>
```
This page represents the login page of the application. It uses <a href='https://material-ui.com/'>material-ui</a> to create the style of the page as well as the forms.

Once a user has submitted their email and password, the <code>handleSubmit</code> function is called. This function, in turn, calls the  <code>LoginController</code> which is located in [login.js](##Login.js). If successful, the functions pushes the secure route on the history stack and redirects the user. If unsuccessful, the user is not redirected and must try again or proceed to another unsecured page.

Images displayed on this page are randomly generated from <a href='http://unsplash.com'>unsplash</a> from a random api endpoint located at <code>https://source.unsplash.com/random</code>

## Signup.jsx

> JSX returned by Signup.jsx

```jsx
<Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
    <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Sign up
    </Typography>
    <form className={classes.form} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" 
            color="primary" />}
            label="I want to receive inspiration, 
              marketing promotions and updates via email."
          />
        </Grid>
      </Grid>
      <Button
        //onClick={}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign Up
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link component={ReactLink} to="/login" 
            variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </form>
  </div>
  <Box mt={5}>
    <Copyright />
  </Box>
</Container>
```

This page represents the signup page of the application. It uses <a href='https://material-ui.com/'>material-ui</a> to create the style of the page as well as the forms.

Presently, this page is non-functional and is here for when we need to implement the signup functionality of the application.