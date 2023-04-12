express = require('express');
app = express();
const cookieParser = require('cookie-parser');


const dotenv = require('dotenv');
const connect = require('./config/dbconnection');
const site = require('./routes/forms/siteRoute');
const department = require('./routes/forms/departmentRoute');
const area = require('./routes/forms/areaRoute');
const employee = require('./routes/forms/employeeRoute');
const visitor = require('./routes/forms/visitorRoute');
const areaManager = require('./routes/forms/areaManagerRoute');
const dca = require('./routes/form management/dcaRoute');
const pi = require('./routes/form management/piRoute');
const user = require('./routes/roles/userRoute');
const manager = require('./routes/roles/managerRoute');
const admin = require('./routes/roles/adminRoute');
const pireport = require('./routes/reports/piReport');
const dcareport = require('./routes/reports/dcaReport');
const hazardreport = require('./routes/reports/hazardReport');
const incidentreport = require('./routes/reports/incidentReport');
const taskreport = require('./routes/reports/taskReports');
const safeunsafereport = require('./routes/reports/safeUnsafeReport');
const dcachecklist = require('./routes/checklists/dcaChecklist');
const pichecklist = require('./routes/checklists/piChecklist');
const sam = require('./routes/Meetings/samReport');

dotenv.config();
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
app.use('/api/pi', pi)
app.use('/api/user', user)
app.use('/api/manager', manager)
app.use('/api/admin', admin)
app.use('/api/pireport', pireport)
app.use('/api/dcareport', dcareport)
app.use('/api/hazardreport', hazardreport)
app.use('/api/incidentreport', incidentreport)
app.use('/api/taskreport', taskreport)
app.use('/api/safeunsafereport', safeunsafereport)
app.use('/api/dcachecklist', dcachecklist)
app.use('/api/pichecklist', pichecklist)
app.use('/api/sam', sam)






connect();

app.get('/', (req, res) => {
    res.send("works!");
    }
);


app.listen(4000, () => {
    console.log('Server is running on port 4000');
}
);