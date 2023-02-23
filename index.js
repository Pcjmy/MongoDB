// nodejs 连接 mongodb
// 体会 nodejs 连接 mongodb 的能力，不会真的用到路由上
// mongoose 对接路由的功能

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017"; // 本地启动的mongodb服务
const client = new MongoClient(url);
const dbName = "comment1"; // 数据库（留言板）

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user1");

  // the following code examples can be pasted here...

  return "mongodb 连接成功";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
