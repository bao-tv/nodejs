module.exports = {
    mutipleMogooseToObject: function (mongoose) {
        return mongoose.map(obj => obj.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}