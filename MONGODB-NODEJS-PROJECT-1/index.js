const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1";

const client = new MongoClient(uri);


const main = async () => {
  await client.connect();

  const db = client.db("shop");

  const collections = db.collection("products");

  const data = await collections.find({ price: { $gt: 1200 } }).toArray();

  console.log(data);
  return "done";
};


main().then(console.log()).catch((e)=> console.log(e)).finally(() =>client.close())


