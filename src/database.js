import mongoose from 'mongoose'
/*
mongoose.connect('mongodb://localhost:27017/mydb')
.then(db => console.log('Db is connected'))
.catch(error => console.log(error))*/
mongoose.connect('mongodb://localhost:27017/companydb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex : true
    //useFindAndModify: true
  }
).then(db => console.log('Db is connected'))
.catch(error => console.log(error));