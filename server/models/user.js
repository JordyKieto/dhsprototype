var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true }, 
    familySize: { type: Number, required: true },
    dependant: { type: Schema.Types.Mixed, required: false },
    education: { type: String, required: true },
});
module.exports = mongoose.model('User', userSchema)

