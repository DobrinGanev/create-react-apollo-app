import http from "http"
import app from "./server"

const server = http.createServer(app)
let currentApp = app
const PORT = 5000
server.listen(PORT, () => console.log(`express server listening on ${PORT}`))

if (module.hot) {
    module.hot.accept("./server", () => {
        server.removeListener("request", currentApp)
        server.on("request", app)
        currentApp = app
    })
}
