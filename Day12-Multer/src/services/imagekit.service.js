const ImageKit = require("@imagekit/nodejs")

const client = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});



async function uploadFiles(buffer, fileName) {
    const response = await client.files.upload({
        file: buffer.toString("base64"),
        fileName: fileName,
    });
    console.log("response", response)
    return response;
}

module.exports = uploadFiles    