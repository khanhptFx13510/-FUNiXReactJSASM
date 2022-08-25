const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mogoConnect = (callback) =>{
   MongoClient.connect('mongodb+srv://khanhpham:khanhdu123@khanhpham.6zl1ibi.mongodb.net/?retryWrites=true&w=majority')
      .then(client => {
         console.log('conneted!');
         callback(client);
      })
      .catch(err => console.log(err))
}

module.exports = mogoConnect