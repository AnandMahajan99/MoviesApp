const moongose = require('mongoose');

const LocalDb = 'mongodb://localhost/cinema';
// const PASSWORD = '5QeFl0i7N3F3UGrI';
// const USERNAME = 'Anand';
// const DB = 'mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.hbjle.mongodb.net/NodeExample?retryWrites=true&w=majority';

moongose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log('Database connected successfully.'))
.catch(err => console.error('Connection Error', err));

const db = moongose.connection;

module.exports = db;