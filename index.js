const server = require("./api/server");
require("dotenv").config();

const port = process.env.PORT || 9000;

server.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
