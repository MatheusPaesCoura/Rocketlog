//Instalações: NPM INIT, express, typescript, TSX, express-async-errors, zod

import { app } from "./app";
import "dotenv/config";
import { env } from "./env";






const PORT = env.PORT

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))