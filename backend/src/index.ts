import { error } from "console";
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";


//connections aand listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => 
    console.log("Server open & connected to database👍")
    );
  })
  .catch((err) => console.log(err));