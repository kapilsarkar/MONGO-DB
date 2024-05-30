### $project :

- The $project stage reshapes documents, includes or excludes fields, and performs operations on fields.

- Command : `{ $project: { <field1>: <expression1>, ... } }`

Example : Using the project operator it shows the value greater than 1200 and the discount price  i.e multiplied by 0.8 and the actual price

Command : `db.products.aggregate([{$match:{price:{$gt:1200}}},{$project:{price:1,discountPrice:{$multiply:['$price',0.8]}}}])`

Output: `[
  {
    _id: ObjectId('64c23601e32f4a51b19b9263'),
    price: 1299,
    discountPrice: 1039.2
  },
  {
    _id: ObjectId('64c236a2e32f4a51b19b9281'),
    price: 1999,
    discountPrice: 1599.2
  },
  {
    _id: ObjectId('64c23707e32f4a51b19b9296'),
    price: 1999,
    discountPrice: 1599.2
  }
]`

