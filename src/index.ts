import dotenv from "dotenv";
dotenv.config();

import { server } from "./app";

const PORT = process.env.PORT;

server.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
