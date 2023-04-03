express = require('express');
app = express();
const connect = require('./config/dbconnection');


connect();

app.get('/', (req, res) => {
    res.send("works!");
    }
);


app.listen(4000, () => {
    console.log('Server is running on port 4000');
}
);