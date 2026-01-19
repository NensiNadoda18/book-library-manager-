require("dotenv").config({path:__dirname+'/../.env'})

const _config={
    port:process.env.PORT,
    uri:process.env.MONGO_URI
}

const config=Object.freeze(_config)
module.exports=config