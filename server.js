//LEVANTO EL SERVER
const CONFIG = require('./app/config/config.js'); 
const app = require('./app/app.js'); 
const database = require('./app/config/database.js');

app.listen(CONFIG.PORT, err => { 
  if (err) {
    return console.log(err) 
  } else {
    console.log(`Server is running on port ${CONFIG.PORT}`);
  }
});
