import dotenv from "dotenv";
import app from "./app.js";
import connectDb from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDb();

    app.listen(PORT, ()=>{
        console.log(`server running on http://localhost:${PORT}`);
    })
}


startServer();