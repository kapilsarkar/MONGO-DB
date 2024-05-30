### COMPLEX EXPRESSIONS IN MONGODB

The $expr operator allows using aggregation expressions within a query.
Useful when you need to compare fields from the same document in a more complex manner.


`Command :` { $expr: { operator: [field, value] } }

Example: Find Products which has price greater than 1340 using $expr

` db.products.find({$expr:{$gt:['$price',1340]}})`

Output:

`[
  {
    _id: ObjectId('64c236a2e32f4a51b19b9281'),
    name: 'Diamond Ring',
    company: '64c23350e32f4a51b19b923a',
    price: 1999,
    colors: [ '#000000', '#cc6600', '#663300' ],
    image: '/images/product-diamond-ring.png',
    category: '64c2342de32f4a51b19b9259',
    isFeatured: false
  },
  {
    _id: ObjectId('64c23707e32f4a51b19b9296'),
    name: 'Diamond Ring',
    company: '64c23350e32f4a51b19b923a',
    price: 1999,
    colors: [ '#000000', '#cc6600', '#663300' ],
    image: '/images/product-diamond-ring.png',
    category: '64c2342de32f4a51b19b9259',
    isFeatured: false
  }
]`


- ADVANTAGES OF USING $expr

Example -

`Find Sales where(quantity *price ) is greater than target price ? `

- Sales Json Data : `[
  { _id: 1, quantity: 10, price: 15, targetPrice: 120 },
  { _id: 3, quantity: 6, price: 35, targetPrice: 100 },
  { _id: 4, quantity: 5, price: 55, targetPrice: 150 },
  { _id: 5, quantity: 5, price: 55, targetPrice: 150 },
  { _id: 2, quantity: 5, price: 25, targetPrice: 100 }
]`

Command - ` db.sales.find({$expr:{$gt:[{$multiply:['$quantity','$price']},'$targetPrice']}})`

Output - `[
  { _id: 1, quantity: 10, price: 15, targetPrice: 120 },
  { _id: 3, quantity: 6, price: 35, targetPrice: 100 },
  { _id: 4, quantity: 5, price: 55, targetPrice: 150 },
  { _id: 5, quantity: 5, price: 55, targetPrice: 150 },
  { _id: 2, quantity: 5, price: 25, targetPrice: 100 }
]`

