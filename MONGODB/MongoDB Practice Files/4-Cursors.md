### CURSOR IN MONGODB

`CURSOR-METHODS :`

1. `count()`

1. `limit()`

1. `skip()`

1. `sort()`

### DESCRIPTION :


- `count() :` To see the number of count inside the data

 Example:


`db.products.find({'price':{$gt:259}}).count()`- It displays the number of price fiels avilabe which are greater the 259 


Output: `7570`

- `limit() :` To set the limits in viewing the data

Example:

`db.products.find({'price':{$gt:259}}).limit(1):` - It limits the data to 1

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
  }
]`

- `skip()`: Along with the limit it also skips the data

Example :

`db.products.find({'price':{$gt:259}}).limit(2).skip(1)`

Output:

`[
  {
    _id: ObjectId('64c23601e32f4a51b19b9263'),
    name: 'Laptop Pro',
    company: '64c23350e32f4a51b19b9231',
    price: 1299,
    colors: [ '#333333', '#cccccc', '#00ff00' ],
    image: '/images/product-laptop.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: true
  },
  {
    _id: ObjectId('64c23601e32f4a51b19b9268'),
    name: 'Outdoor Camping Tent',
    company: '64c23350e32f4a51b19b9236',
    price: 299,
    colors: [ '#333333', '#99cc00', '#ffcc00' ],
    image: '/images/product-tent.png',
    category: '64c2342de32f4a51b19b9252',
    isFeatured: false
  }
]`

- `sort() :` It sort the data according to ascending and descending order

Command Example: `db.products.find({ price: { $gt: 1250 } }'.limit(3).sort({ price: 1 }));

(1) for ascending and (-1) for descending`

For ascending order :

Example : `db.products.find({'price' : {$gt:1250}}).limit(3).sort({'price':1})`

Output : It is in ascending order

`[
  {
    _id: ObjectId('64c23601e32f4a51b19b9263'),
    name: 'Laptop Pro',
    company: '64c23350e32f4a51b19b9231',
    price: 1299,
    colors: [ '#333333', '#cccccc', '#00ff00' ],
    image: '/images/product-laptop.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: true
  },
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

For Descending Order:

Example : ` db.products.find({'price': {$gt:1250}}).limit(3).sort({'price':-1})` 

Output : It is in descending order


`[
  {
    _id: ObjectId('64c23707e32f4a51b19b9296'),
    name: 'Diamond Ring',
    company: '64c23350e32f4a51b19b923a',
    price: 1999,
    colors: [ '#000000', '#cc6600', '#663300' ],
    image: '/images/product-diamond-ring.png',
    category: '64c2342de32f4a51b19b9259',
    isFeatured: false
  },
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
