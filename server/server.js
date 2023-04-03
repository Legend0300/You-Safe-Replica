express = require('express');
app = express();
const connect = require('./config/dbconnection');
const site = require('./routes/forms/siteRoute');
const department = require('./routes/forms/departmentRoute');
const area = require('./routes/forms/areaRoute');
const employee = require('./routes/forms/employeeRoute');
const visitor = require('./routes/forms/visitorRoute');
const areaManager = require('./routes/forms/areaManagerRoute');


app.use(express.json());

app.use('/api/site', site);
app.use('/api/department', department)
app.use('/api/area', area)
app.use('/api/employee', employee)
app.use('/api/visitor', visitor)
app.use('/api/areaManager', areaManager)




connect();

app.get('/', (req, res) => {
    res.send("works!");
    }
);


app.listen(4000, () => {
    console.log('Server is running on port 4000');
}
);