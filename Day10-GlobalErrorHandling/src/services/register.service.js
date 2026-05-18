const ApiError = require("../utils/apiError");
const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt')

const registerService = async (data) => {
    const { name, email, password } = data;
    if (!name || !email || !password) {
        throw new ApiError(400, 'all fields are required');
    }

    const isUserExist = await UserModel.findOne({
        $or: [
            { email }, { name }
        ]
    });

    if (isUserExist) {
        throw new ApiError(409, 'user already exist');
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await UserModel.create({
        name, email, password: hashedPassword
    });

    return user;
}