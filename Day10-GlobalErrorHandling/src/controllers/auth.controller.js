const express = require('express');
const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/apiError');
const ApiRespose = require('../utils/apiResponse');
const registerService = require('../services/register.service');

const register = asyncHandler(async (req, res) => {
    let user = await registerService(req.body);
    return res.json(new ApiRespose(201, 'user registered successfully', user));
})

const login = (req, res) => {
    try {

    }
    catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    register, login
}