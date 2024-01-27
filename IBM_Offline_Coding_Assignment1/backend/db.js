
const mongoose = require('mongoose');


export const connection = mongoose.connect(process.env.mongourl);