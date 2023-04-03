express = require('express');
app = express();
const connect = require('./config/dbconnection');
const site = require('./routes/forms/siteRoute');
const department = require('./routes/forms/departmentRoute');
app.use(express.json());

app.use('/api/site', site);
app.use('/api/department', department)


connect();

app.get('/', (req, res) => {
    res.send("works!");
    }
);


app.listen(4000, () => {
    console.log('Server is running on port 4000');
}
);