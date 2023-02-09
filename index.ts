import "dotenv/config";
import app from "./src/app"
import { mongooseConnection } from "./src/db-config/mongo-db.config";

const PORT = process.env.PORT || 3001
app.listen(PORT, async ()=>{
    try {
        await mongooseConnection()
        console.log("listening at port ", PORT)
    } catch (error) {
        console.log(error)
    }
   
})