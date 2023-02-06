const connect = require('./config/db')
const app = require('./index')

const port = process.env.PORT || 5000


app.listen(port,async()=>{

    try {
        await connect()
        console.log( "Server is Listening at port " + port )
    } catch (error) {
        console.log(error)
    }
})