//Instalações: NPM INIT, express, typescript, TSX, express-async-errors, zod

import { app } from "./app";

const PORT = 3333

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))