import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";

import { server } from "./app";

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
