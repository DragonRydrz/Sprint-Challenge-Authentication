<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

* Middleware, once again, are functions that are run between the start and the end of various calls. In this case, they are run between the start of a call to our server, and before sending a response back to the client.
* Sessions are from the time a user logs into your app, up until they log out and you destroy the session.
* Bcrypt is a framwork that give us the capability of "hashing" passwords to store in our database. Hashing is a one way operation and can not be undone.
* JWT - Json Web Token - this is an enctypted token that the server creates and gives to the client. Tokens need to be sent in the header of requests in order to verify authenticity of a user.

2.  What does bcrypt do in order to prevent attacks?

* BCrypt allows extra rounds of hashing to be done, which increases the time it takes to has a password. The longer it takes to hash one password, the longer a brute force attack will take to gain acces to an account.

3.  What are the three parts of the JSON Web Token?

* Data + Secret + Options

- Data is an object you define, normally including a userID, username, in order to verify authenticity.
- Secret is a sting known only to the server which allows the enctyption and decryption of the JWT.
- Options include the length of time that the JWT is valid.
