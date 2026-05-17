const express = require('express');
const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const asyncHandler = require('../utils/asyncHandler');

export const register = asyncHandler(async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            throw new Error('all fields are required');
        }

        const isUserExist = await UserModel.findOne({
            $or: [
                { email }, { name }
            ]
        });

        if (isUserExist) {
            throw new Error('user already exist');
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = await UserModel.create({
            name, email, password: hashedPassword
        });

    }
    catch (error) {
        throw new Error("internal server error");
    }
})

export const login = (req, res) => {
    try {

    }
    catch (error) {
        res.status(500).json({ message: 'internal server error' });
    }
}