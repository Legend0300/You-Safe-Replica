const { default: mongoose } = require("mongoose");
const dotenv = require('dotenv').config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_KEY, {
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;
// const { MongoClient, ServerApiVersion } = require('mongodb');

// // Replace the following with your Atlas connection string

// const connect = async () => {
//     try {
//         await MongoClient.connect(process.env.DB_KEY, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             serverApi: ServerApiVersion.v1
//         });
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.log(error);
//     }
// }

// module.exports = connect;

// const uri = "mongodb+srv://minininja:RG7HHC5RTqCY5s8v@unicluster.pofs6l8.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log("Connected to MongoDB");
//   // perform actions on the collection object
//   client.close();
// });