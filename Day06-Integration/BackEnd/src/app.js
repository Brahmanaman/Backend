const express = require("express");
const cors = require("cors")
const productModel = require("./model/product.model");

const app = express()

//middleware
app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json())


app.get("/", (req, res) => {
    res.send("server is running");
})

app.post("/create-product", async (req, res) => {
    try {
        const { productName, description, category, amount, currency, stock } = req.body

        if (!productName || !amount || !stock) {
            return res.status(400).json({
                message: "All field is required"
            })
        }

        let newProduct = await productModel.create({
            productName,
            description,
            category,
            price: {
                amount,
                currency
            },
            stock
        })

        return res.status(201).json({
            message: "product created successfully"
        })
    }
    catch (error) {
        console.log("error while creating product", error)
        res.status(500).json({
            message: "Internal server error"
        })
    }

})


module.exports = app


