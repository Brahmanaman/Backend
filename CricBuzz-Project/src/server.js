import createApp from "./app.js";
import env from "./config/env.js"
import logger from "./config/logger.js"
import connectDb from "./database/mongodb.js"
const app = createApp();

async function startServer() {
    connectDb().then(() => {
        app.listen(env.PORT, () => {
            logger.info("Server started on port " + env.PORT);
        });
    }).catch((err) => {
        logger.error(err, "while running server");
    })

}

startServer();