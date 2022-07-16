import { createServer, Server } from "http";
import { port } from "../@config/config";
import App from "../@app/index";

const onListen = (server: Server): void => {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${port}`;
  console.log(`Listening on ${JSON.stringify(addr)} http://127.0.0.1:${port}`);
};

const onError = (e: any, server: Server) => {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(port);
    }, 1000);
  }
};

function initServer() {
  App.set("port", port);
  const server = createServer(App);
  server.listen(port);
  server.on("listening", () => {
    onListen(server);
  });
  server.on('error', (e: any) => {
    console.log(e)
  });
  server.on('close', (e: any) => {
    console.log(e)
  });

}

export default initServer;
