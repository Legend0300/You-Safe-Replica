const corsProxy = require('cors-anywhere');

const host = 'localhost';
const port = 4000;

corsProxy
  .createServer({
    originWhitelist: [],
  })
  .listen(port, host, () => {
    console.log(`CORS Anywhere server is listening on ${host}:${port}`);
  });

/*Blocked by CORS policy: No 'Access-Control-Allow-Origin'.
  CORS Proxy created to access the resources*/
