### $group :

- The $group stage groups documents by specified fields and performs aggregate operations on grouped data.

- It is like the reduce() method in Java Script.

- When dealing with the $group stage we need to pass $sign for our existing field not the one we are going to create.

Command : `db.products.aggregate([{$group:{_id:"$company",totalProducts:{$sum:1}}}])`

Output: `[
  { _id: ObjectId('64c23350e32f4a51b19b9233'), totalProducts: 320 },
  { _id: '64c23350e32f4a51b19b9254', totalProducts: 1 },
  { _id: '64c23350e32f4a51b19b9250', totalProducts: 2 },
  { _id: ObjectId('64c23350e32f4a51b19b9243'), totalProducts: 351 },
  { _id: ObjectId('64c23350e32f4a51b19b923e'), totalProducts: 381 },
  { _id: ObjectId('64c23350e32f4a51b19b923d'), totalProducts: 337 },
  { _id: '64c23350e32f4a51b19b9252', totalProducts: 2 },
  { _id: '64c23350e32f4a51b19b924b', totalProducts: 2 },
  { _id: '64c23350e32f4a51b19b9256', totalProducts: 1 },
  { _id: '64c23350e32f4a51b19b923f', totalProducts: 5 },
  { _id: '64c23350e32f4a51b19b9245', totalProducts: 2 },
  { _id: ObjectId('64c23350e32f4a51b19b9248'), totalProducts: 374 },
  { _id: ObjectId('64c23350e32f4a51b19b9230'), totalProducts: 319 },
  { _id: '64c23350e32f4a51b19b9249', totalProducts: 2 },
  { _id: '64c23350e32f4a51b19b9231', totalProducts: 6 },
  { _id: '64c23350e32f4a51b19b9253', totalProducts: 1 },
  { _id: ObjectId('64c23350e32f4a51b19b9245'), totalProducts: 313 },
  { _id: ObjectId('64c23350e32f4a51b19b924d'), totalProducts: 342 },
  { _id: '64c23350e32f4a51b19b9233', totalProducts: 6 },
  { _id: ObjectId('64c23350e32f4a51b19b9246'), totalProducts: 305 }
]`

Command : `db.products.aggregate([{$match:{company:"64c23350e32f4a51b19b9252"}}])`

Output : `[
  {
    _id: ObjectId('64c23871e32f4a51b19b92cb'),
    name: 'Dumbbell Set',
    company: '64c23350e32f4a51b19b9252',
    price: 49,
    colors: [ '#333333', '#ff9900', '#00cc99' ],
    image: '/images/product-dumbbell-set.png',
    category: '64c2342de32f4a51b19b925e',
    isFeatured: false
  },
  {
    _id: ObjectId('64c239f1e32f4a51b19b92f7'),
    name: 'Wireless Charging Dock',
    company: '64c23350e32f4a51b19b9252',
    price: 49,
    colors: [ '#000000', '#666666', '#cc9900' ],
    image: '/images/product-charging-dock.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: false
  }
]`

Example : Now from the above output add the price field 

Command: ` db.products.aggregate([{$group:{_id:"$company",totalProducts:{$sum:"$price"}}}])`

Output: `[
  { _id: ObjectId('64c23350e32f4a51b19b9231'), totalProducts: 168915 },
  { _id: '64c23350e32f4a51b19b924e', totalProducts: 598 },
  { _id: ObjectId('64c23350e32f4a51b19b9249'), totalProducts: 155570 },
  { _id: '64c23350e32f4a51b19b9241', totalProducts: 1544 },
  { _id: '64c23350e32f4a51b19b9236', totalProducts: 1344 },
  { _id: '64c23350e32f4a51b19b9248', totalProducts: 228 },
  { _id: '64c23350e32f4a51b19b923c', totalProducts: 844 },
  { _id: ObjectId('64c23350e32f4a51b19b924c'), totalProducts: 169452 },
  { _id: ObjectId('64c23350e32f4a51b19b924b'), totalProducts: 171747 },
  { _id: ObjectId('64c23350e32f4a51b19b923f'), totalProducts: 165420 },
  { _id: '64c23350e32f4a51b19b9246', totalProducts: 978 },
  { _id: '64c23350e32f4a51b19b923e', totalProducts: 309 },
  { _id: '64c23350e32f4a51b19b923a', totalProducts: 4884 },
  { _id: '64c23350e32f4a51b19b924f', totalProducts: 118 },
  { _id: ObjectId('64c23350e32f4a51b19b9238'), totalProducts: 173258 },
  { _id: '64c23350e32f4a51b19b9257', totalProducts: 79 },
  { _id: ObjectId('64c23350e32f4a51b19b9237'), totalProducts: 166583 },
  { _id: '64c23350e32f4a51b19b9239', totalProducts: 1704 },
  { _id: ObjectId('64c23350e32f4a51b19b9241'), totalProducts: 168643 },
  { _id: ObjectId('64c23350e32f4a51b19b9235'), totalProducts: 168061 }
]`


Example : From the products field find price greater than 1200 group by company name and also sum their prices?

Command : `db.products.aggregate([{$match:{price:{$gt:1200}}},{$group:{_id:"$company",totalProducts:{$sum:"$price"}}}])`

Output: `[
  { _id: '64c23350e32f4a51b19b923a', totalProducts: 3998 },
  { _id: '64c23350e32f4a51b19b9231', totalProducts: 1299 }
]`

Example : In the sales collection find the quantity = 5, group them with the same quantity and find the average price ?

Sample - Data: `[
  { _id: 1, quantity: 10, price: 15, targetPrice: 120 },
  { _id: 3, quantity: 6, price: 35, targetPrice: 100 },
  { _id: 4, quantity: 5, price: 55, targetPrice: 150 },
  { _id: 5, quantity: 5, price: 55, targetPrice: 150 },
  { _id: 2, quantity: 5, price: 25, targetPrice: 100 }
]`

Command : ` db.sales.aggregate([{$match:{quantity:5}},{$group:{_id:'$quantity',priceTotal:{$sum:'$price'},priceAvg:{$avg:'$price'}}}])`

Output : `[ { _id: 5, priceTotal: 135, priceAvg: 45 } ]`




