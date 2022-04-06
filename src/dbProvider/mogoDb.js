const mongoose = require('mongoose');
const DB = require('../const');



async function main() {
  await mongoose.connect(DB.MONGO_URI);
}

main().catch(err => console.log(err));