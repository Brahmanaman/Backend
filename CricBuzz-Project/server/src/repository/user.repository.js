//mongodb queries
import userModel from "../models/user.model.js"


class UserRepo {
    async create(payload) {
        return await userModel.create(payload)
    }

    async findByEmail(email) {
        return await userModel.findOne({ email }).lean()
    }

    async findById(id) {
        return await userModel.findById(id).lean()
    }
}

export default UserRepo
