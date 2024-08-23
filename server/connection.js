const mongoose = require('mongoose');

const url = 'mongodb+srv://ChatApplication:%23heymongodb@cluster0.zhgrb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(url)
    .then(() => console.log('connected to db'))
    .catch((e) => console.log('Error', e));
