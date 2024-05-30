### $match :

- The $match stage is similar to the query used as the first argument in .find(). 

- It filters documents based on specified conditions.

Example - 1 : `Retrieve all products with a name = Sleek Wooden Tuna ?`

Command : `db.products.aggregate([{$match:{'name':'Sleek Wooden Tuna'}}])`

Output : `[
  {
    _id: ObjectId('64c23edf9dc1fb2f85601ae5'),
    name: 'Sleek Wooden Tuna',
    company: ObjectId('64c23350e32f4a51b19b9235'),
    price: 101,
    colors: [ '#29505b' ],
    image: '/images/product-Recycled.png',
    category: ObjectId('64c2342de32f4a51b19b9255'),
    isFeatured: false,
    __v: 0
  },
  {
    _id: ObjectId('64c23edf9dc1fb2f856027db'),
    name: 'Sleek Wooden Tuna',
    company: ObjectId('64c23350e32f4a51b19b9241'),
    price: 363,
    colors: [ '#464438' ],
    image: '/images/product-Sleek.png',
    category: ObjectId('64c2342de32f4a51b19b9256'),
    isFeatured: false,
    __v: 0
  }
]`

Example - 2 : Retrieve all the products where price is greater than 50

Command : `db.products.aggregate([{$match: {price:{$gt:50}}}])`

Output : 
`[
  {
    _id: ObjectId('64c23601e32f4a51b19b9262'),
    name: 'Smartphone Model X',
    company: '64c23350e32f4a51b19b9230',
    price: 699,
    colors: [ '#000000', '#ffffff', '#ff0000' ],
    image: '/images/product-smartphone.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: false
  },
  {
    _id: ObjectId('64c23601e32f4a51b19b9263'),
    name: 'Laptop Pro',
    company: '64c23350e32f4a51b19b9231',
    price: 1299,
    colors: [ '#333333', '#cccccc', '#00ff00' ],
    image: '/images/product-laptop.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: true
  }
  ]`