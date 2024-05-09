import { api } from "./api";
import { databaseConnection } from "./infra/database/conecction";


databaseConnection.sync().then(() => {
  api.listen(3000, () => {
    console.log("Service is running")
  })  
}).catch((error) => {
  console.log("Error to connect to database" + error)
})

