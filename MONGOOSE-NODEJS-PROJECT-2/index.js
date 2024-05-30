const mongoose = require('mongoose')

//const uri = "mongodb://127.0.0.1/shop"; //For connecting with the local server.

const uri = "mongodb+srv://ksarkar81:12345@cluster0.fpbpqh8.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"  //For connecting with Atlas server

mongoose.connect(uri)  //Connection with the server

//We need to create a schema.

//Schema means  the document or object we are creating what will be structure and it's validation.

const productsSchema = new mongoose.Schema({
    name : String,
    company:String,
    price:Number,
    colors:[String],
    Image:String,
    category:String,
    isFeatured:Boolean,
})

//? 2nd step while inserting the data
const data1 = {
   name: "Designer Handbag2",
   company: "64c23350e32f4a51b19b923a",
   price: 2466,
   colors: ["#000000", "#cc6600", "#663300"],
   image: "/images/product-handbag.png",
   category: "64c2342de32f4a51b19b9250",
   isFeatured: true,
 };

//We need to create a model.
//With the help of this model we can perform all the queries in the database.

const Product = new mongoose.model('Product',productsSchema) //Connection with the database.

const main = async()=>{
 try{
     //Find Documents:

    const data = await Product.find({price:{$gt:1200}})
    console.log(data)
    //Insert Documents:

   //  await Product.insertMany(data1)
   //  const data2 = await Product.find({price:{$eq:2466}})
   //  console.log(data2)


    //Update Documents:

     await Product.findOneAndUpdate(
      {name:"Designer Handbag2",price:2466},
      {$set:{price:2499}}

      //? 3 Delete query

   //  await Product.findOneAndDelete({ name: "Designer Handbag2", price: 2499 });
   //  const data = await Product.find({
   //    name: "Designer Handbag2",
   //    price: 2499,
   //  });

   )
   const data2 = await Product.find({price:{$eq:2499}})
   console.log(data2)
 }
 catch(err){
    console.log(err)
 }
 finally{
    mongoose.connection.close()
 }
}

main()
