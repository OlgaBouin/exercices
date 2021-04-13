import { app } from "./server"

const PORT = process.env.PORT || 3030
//const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server successfully started on http://localhost:${PORT}`)
});