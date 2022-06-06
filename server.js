const cors = require("cors")
const { default: App } = require("./src/App")

App.use(cors())