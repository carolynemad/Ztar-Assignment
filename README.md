# Ztar-Assignment

# Decrypt .env.enc
As early as possible in your application, require and configure dotenv.

let secureEnv = require('secure-env');
global.env = secureEnv({secret:'mySecretPassword'});
 
That's it.
