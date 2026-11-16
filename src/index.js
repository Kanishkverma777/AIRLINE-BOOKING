const express = require('express');

const { serverConfig } = require('./config');  // agr index.js me se export krte h to /index likhne ki need nhi hoti h 
const apiRoutes = require('./routes');

const app = express();
app.use(express.json()); // to parse the incoming request body as JSON
app.use(express.urlencoded({ extended: true })); // to parse the incoming request body as URL-encoded data

//routes          
app.use('/api', apiRoutes); 

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}`);
});