import ax from "src/api/axios"

async function getData() {
  return ax.get("/data")
}

const AppAPI = { getData }
export default AppAPI
