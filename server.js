const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const items = require('./routes/api/items')

// bodyParser middleware
app.use(bodyParser.json())

// // db config
// const db = require('./config/keys').mongoURI
// 
// // connect to mongo
// mongoose.connect(db, { useNewUrlParser: true })
//   .then(() => console.log('mongodb connected'))
//   .catch(err => console.log(err))

mongoose.connect(
  'mongodb+srv://tigeradmin:'
      + process.env.MONGO_ATLAS_PW
      + '@tigernodesandreact-4kfsd.mongodb.net/', {
    dbName: 'tigernodesandreact',
    useNewUrlParser: true
  }
);

mongoose.Promise = global.Promise;

// handling cors error
app.use((req, res, next) => {
  res.header('Access-Controller-Allow-Origin', '*');
  res.header('Access-Controller-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if(req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({
      // header: res.header // to try later
    });
  }
  console.log("______cors_____")
  next();
});

// use routes
app.use('/api/items', items)

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'index'
  });
});

// Array testing
app.get('/api/customers', (req, res) => {

    const customers = [
        { id: 1, firstname: 'john', lastname: 'doe', email: 'email@example.com' },
        { id: 2, firstname: 'jon2', lastname: 'do2', email: 'emai2@example.com' }
    ];

    res.json(customers);

});

// Reaching here, no route has matched the request
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// Sending the error, from the 404 or any other source
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

if(process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('mern_client_1/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'mern_client_1', 'build', 'index.html'))
  })

}

// const port = process.env.PORT || 5000
// 
// app.listen(port, () => console.log(`server on ${port}`))
