# Team 18's notes for Authorization.

## Sergio

- **Basic Auth** is an obvious choice for authorization. It is easy to implement and straight forward. It isn't as basic as storing data in plain text but it is definitely limited in security. This method utilizes Base64 encoding/decoding in the Header.
  
  - Adding JWT to determine authorization would be a smart idea. This would handle admin granting access to admin pages once they are authenticated.
![JWT-Example](resources/JWT-Example.webp)

- **OAuth** relegates the authorization process to another site (i.e: Google, Facebook). There are many ***flows*** that Oath can use to perform authentication, such as granting short-lived code or an access token.
  - This would be a good stretch goal to implement as it is a part of the best practices to do.

It is also important to note with either decision we choose, our sponsor will use their company integration as the authentication. The lifetime of the authentication will only live as long as the project remains our capstone.

## Dillon
Basic Authentication
- Most basic authentication utilizing a password and a username tied to the password. This is easy to achieve but for our client may not be the best due to security issues. Can be a victim of brute force hacking which employs many attempts to get into an account. Although easy to deploy, the danger to our client is large.

MultiFactor
- MFA requires multiple methods to identify our user. This can be deployed such as a log in attempt with a password and username and also include a captcha or a code sent to a third party email. People can lose their second authorization but it is a good defense against hack attempts. Could be utilized for our client but deployment may be difficult.

Cerificate Based
Identifies users based on digital certificates. This can be used using a public key and a digital signature of a certifcation authority. User would simply provide a digital cerficiate when sigining on to our server. This is simply to much for what we are trying to achieve and may cause too many complications. 

Biometric authentication
Biometric autehntication uses biological aspects of a person such as a fingerpint scanner or face scanner. We do not have the current technologies at our disposal and cannot deploy this to the client. This may be used when developing an iphone app for the deliverables. Using the Iphone's toolkit and face scanning technology. We could request users to either enter a passcode or use the face scanner. This opens up alot of debate for privacy and information of clients. 

Token Based authentication
Allows aour user to enter credentials into our server and receive an encrypte string to the user. The user can then use the token that the system gave to enter into in order to avoid entering credentials again. This is quite useful for the user but requires heavy implemntation on our part. It may be too much for our current project. 

## Shane
Based on the requirements, I think Basic Auth is probably going to be sufficient.  We know we will have to make updates and do an integration with StateFarms internal AD for authentication if they go to onboard this app.  So burning through the additional cycles beyond basic auth is probably not required.  We can add a stretch goal to dig standup an LDAP server and integrate authentication with that to make the transition from Heroku to SF easier, but I do not think that should be a priority task.

## Adam
- **Basic Auth:**  Requires sign in with username/ID and password.
	- Typically takes the password and compares it to that which is stored in the authentication database.
	- This appears to be the most applicable approach for our project.

|   |   |   |   |
|---|---|---|---|
|PROS:   |Easy to manage in app   |Easy to deploy   |Easy for end users   | 
|CONS:   |Pws weakly specified   |IDs can be spoofed  |PWs susceptible to theft |

- **Multi-Factor Auth:** combination of auth to validate ID
	- Typically uses name and password, paired with some form of token
	  -  Token could be smart-card, one-time passphrase, single use PINS, biometric info

|   |   |   |   |   |
|---|---|---|---|---|
|PROS:  |Difficult to spoof   |Easy to use   |   |   |
|CONS:   |Deploy difficult   |Tokens easy to steal   |Mgmt of tokens challenging, esp if token is lost/stolen	 |

- **Cryptographic Auth:**  includes public key auth, digital signature, message auth code, password permutation
  -  This looks out of scope for what we are capable of doing, unless we use 3rd party auth service.

Link to article: https://www.developer.com/design/article.php/3600351/Authentication-in-Applications.htm

- **API Key:** This is a generated code given to the developer that is a long, unguessable string
  - Can pass alongside auth header:
    - curl "https://example.com/" \
    - -H "Authorization: 234092oasdfn320dafn3252304fd"

|   |   | 
|---|---|
|PROS:  |Add nuance to given keys: restricts some, gives access to others |
|CONS:   |No standard on API key like that of basic authentication (standards were est in 1999) |

- **OAuth:** Ensures end user shared no creds with third-party appl, ie, the developer.

|   |   |   | 
|---|---|---|
|PROS:  |Can handle sign in through common apps: github, fb, apple, twitter, google, microsoft, yahoo |promotes best practices|
|CONS:   |Tricky for new devs to impl |  No one-way of doing OAuth |

Link to article: https://dev.to/bearer/the-three-most-common-api-authentication-methods-2mnm

- **Firebase Auth:** 3rd party service that has open-source JS library for web auth solutions 

|   |   |   |
|---|---|---|
|PROS:  |Can handle sign in through common apps: github, fb, apple, twitter, google, microsoft, yahoo| promotes best practices |
|   |Has drop-in auth or manual SDK impl   |Has framework for web, mobile and Unity   |   |
|CONS:   |Exports service to Google for Auth|   |   |

## Chris

Given that State Farm has their own system that they will use for logins, having a basic authentication system would be best. The practical approach would be to use a 3rd party service for this such as Auth0 or Firebase. Both can be rapidly implemented, as they mostly just wrap around a react component, and are free for use. Both would do the job, but Firebase might be a slightly better option as the Firebase environment can also act as the cloud host, provide storage, and CDN services. In addition, it also has other features such as a cloud database which could also be easily integrated into the project. Since all these technologies are already designed to work together, it could save some development time. 

If we were to handle the authentication ourselves, we could use JWT authentication with graphQL for the API, PostgresSQL for our database, and the Apollo/Express library which would work to connect our GraphQL schema with our Node.JS server. For something more lightweight, we could use simpler session based authentication with something like a redis database. All of these options utilize the javascript language for implementation which would help to keep everything within the project in the same language.
