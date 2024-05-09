import { api } from "./api";

api.listen(3000, () => {
  console.log("Service is running")
})