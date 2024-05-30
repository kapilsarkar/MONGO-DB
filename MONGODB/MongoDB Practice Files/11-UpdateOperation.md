### UPDATE OPERATION IN MONGODB

- updateOne() and updateMany()

`updateOne() :`

`Example-1` : Update the price value = 45 in a products collections, where the _id = ObjectId("64c2363be32f4a51b19b9271")

Sample-Command : ` db.products.find({_id:ObjectId("64c2363be32f4a51b19b9271")})`

Sample-Output : 

`[
  {
    _id: ObjectId('64c2363be32f4a51b19b9271'),
    name: 'Pet Grooming Kit',
    company: '64c23350e32f4a51b19b923e',
    price: 39,
    colors: [ '#ffffff', '#ffcc00', '#99cc00' ],
    image: '/images/product-pet-grooming.png',
    category: '64c2342de32f4a51b19b9257',
    isFeatured: false
  }
]`

Example-Command : `db.products.updateOne({_id:ObjectId("64c2363be32f4a51b19b9271")},{$set:{'price':45}})`

Output: : `{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}`

Updated-Output :

`[
  {
    _id: ObjectId('64c2363be32f4a51b19b9271'),
    name: 'Pet Grooming Kit',
    company: '64c23350e32f4a51b19b923e',
    price: 45,
    colors: [ '#ffffff', '#ffcc00', '#99cc00' ],
    image: '/images/product-pet-grooming.png',
    category: '64c2342de32f4a51b19b9257',
    isFeatured: false
  }
]`

`Example-2 :` Update the isFeature value = false in a products collections,where the name = Designer Handbag

Command : `db.products.updateOne({'name':'Designer Handbag'},{$set:{'isFeatured':false}})`

Output: 

`{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}`

Updated-Output: 

`[
  {
    _id: ObjectId('64c23601e32f4a51b19b926c'),
    name: 'Designer Handbag',
    company: '64c23350e32f4a51b19b923a',
    price: 349,
    colors: [ '#000000', '#cc6600', '#663300' ],
    image: '/images/product-handbag.png',
    category: '64c2342de32f4a51b19b9250',
    isFeatured: false
  }
]`

`updateMany() :`

`Example-1` : Update all the isFeatured = true in the products,collections where the price = 120

Command : ` db.products.updateMany({'price':120},{$set:{'isFeatured':true}})`

Output: `{
  acknowledged: true,
  insertedId: null,
  matchedCount: 5,
  modifiedCount: 5,
  upsertedCount: 0
}`

Updated-Output: 

`[
  {
    _id: ObjectId('64c23edf9dc1fb2f85602168'),
    name: 'Ergonomic Granite Sausages',
    company: ObjectId('64c23350e32f4a51b19b9240'),
    price: 120,
    colors: [ '#641e3b' ],
    image: '/images/product-Luxurious.png',
    category: ObjectId('64c2342de32f4a51b19b925f'),
    isFeatured: true,
    __v: 0
  },
  {
    _id: ObjectId('64c23edf9dc1fb2f85602c38'),
    name: 'Unbranded Frozen Chicken',
    company: ObjectId('64c23350e32f4a51b19b9234'),
    price: 120,
    colors: [ '#146d77' ],
    image: '/images/product-Tasty.png',
    category: ObjectId('64c2342de32f4a51b19b9261'),
    isFeatured: true,
    __v: 0
  },
  {
    _id: ObjectId('64c23f13f8ffc4957dc4f16e'),
    name: 'Electronic Concrete Bacon',
    company: ObjectId('64c23350e32f4a51b19b923f'),
    price: 120,
    colors: [ '#383d3d' ],
    image: '/images/product-Fantastic.png',
    category: ObjectId('64c2342de32f4a51b19b9258'),
    isFeatured: true,
    __v: 0
  },
  {
    _id: ObjectId('64c23f13f8ffc4957dc4fe9e'),
    name: 'Practical Concrete Ball',
    company: ObjectId('64c23350e32f4a51b19b9230'),
    price: 120,
    colors: [ '#34221e' ],
    image: '/images/product-Sleek.png',
    category: ObjectId('64c2342de32f4a51b19b9250'),
    isFeatured: true,
    __v: 0
  },
  {
    _id: ObjectId('64c23f13f8ffc4957dc4ff92'),
    name: 'Incredible Plastic Sausages',
    company: ObjectId('64c23350e32f4a51b19b9242'),
    price: 120,
    colors: [ '#332648' ],
    image: '/images/product-Ergonomic.png',
    category: ObjectId('64c2342de32f4a51b19b9256'),
    isFeatured: true,
    __v: 0
  }
]`




### REMOVING AND RENAMING THE FIELDS

`Example-1` : Renaming the products collection isFeatured field to isFeature,where the price = 123 ?

`$rename:`


Command:`db.products.updateMany({price:123},{$rename:{'isFeatured':'isFeature'}})`

Output: 
`{
  acknowledged: true,
  insertedId: null,
  matchedCount: 7,
  modifiedCount: 7,
  upsertedCount: 0
}`

Updated-Output:

`[
  {
    _id: ObjectId('64c23e543e180eb8a2682ff4'),
    name: 'Rustic Frozen Towels',
    company: ObjectId('64c23350e32f4a51b19b9235'),
    price: 123,
    colors: [ '#50215b' ],
    image: '/images/product-Rustic.png',
    category: ObjectId('64c2342de32f4a51b19b9255'),
    __v: 0,
    isFeature: false
  }
]`









