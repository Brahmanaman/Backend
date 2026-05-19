const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true
    }
}, { timestamps: true })

userSchema.pre("save", function () {
    this.password = bcrypt.hashSync(this.password, 10)
})

userSchema.methods.generateJWT = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
}

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

const UserModel = mongoose.model("User", userSchema)
module.exports = UserModel