const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb://127.0.0.1:27017/education_dev');
        console.log("success");
    } catch (error) {
        console.log("error: ",error);
        process.exit();
    }
};

module.exports = {connect};

