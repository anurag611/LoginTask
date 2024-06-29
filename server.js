import { config } from "dotenv";
config({ path: "./config.env" });

import { app } from "./app.js";
import { connectDB } from "./data/database.js";

console.log('PORT:', process.env.PORT);
console.log('NODE_ENV:', process.env.NODE_ENV);

connectDB();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`
  );
});
