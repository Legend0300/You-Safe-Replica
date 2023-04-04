express = require('express');
app = express();
const cookieParser = require('cookie-parser');
const env = require('dotenv');

const connect = require('./config/dbconnection');
const site = require('./routes/forms/siteRoute');
const department = require('./routes/forms/departmentRoute');
const area = require('./routes/forms/areaRoute');
const employee = require('./routes/forms/employeeRoute');
const visitor = require('./routes/forms/visitorRoute');
const areaManager = require('./routes/forms/areaManagerRoute');
const dca = require('./routes/form management/dcaRoute');
const user = require('./routes/roles/userRoute');
const manager = require('./routes/roles/managerRoute');


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.use('/api/site', site);
app.use('/api/department', department)
app.use('/api/area', area)
app.use('/api/employee', employee)
app.use('/api/visitor', visitor)
app.use('/api/areaManager', areaManager)
app.use('/api/dca', dca)
app.use('/api/user', user)
app.use('/api/manager', manager)



connect();

app.get('/', (req, res) => {
    res.send("works!");
    }
);


app.listen(4000, () => {
    console.log('Server is running on port 4000');
}
);