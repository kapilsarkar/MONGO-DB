### COMPARISON OPERATORS USED IN MONGODB

- `$eq` - equalto

- `$ne` - notequalto

- `$gt` - greaterthan

- `$gte` - greaterthaneualto

- `$lt` - lessthan

- `$lte` - lessthanequalto

- `$in` - inoperator

- `$nin` - notinoperator


### DESCRIPTION
- `$eq` : egual-to

Example: db.products.find({'price':{$eg:699} })

Output:  [
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
    _id: ObjectId('64c236a2e32f4a51b19b9280'),
    name: 'Elegant Dining Table',
    company: '64c23350e32f4a51b19b9239',
    price: 699,
    colors: [ '#ffffff', '#ffcc00', '#cc9900' ],
    image: '/images/product-dining-table.png',
    category: '64c2342de32f4a51b19b925a',
    isFeatured: true
  },
 
]

- `$ne:` not-equal-tp

Example : db.products.find({'price':{$ne:99} })

Output : [
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
  },
]


- $gt` : greater-than

Example : db.products.find({'price':{$gt:999} })

Output : [
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
    _id: ObjectId('64c236a2e32f4a51b19b9282'),
    name: 'Outdoor Patio Set',
    company: '64c23350e32f4a51b19b923b',
    price: 1199,
    colors: [ '#333333', '#ff9900', '#660000' ],
    image: '/images/product-outdoor-patio.png',
    category: '64c2342de32f4a51b19b925a',
    isFeatured: true
  }
]

- `$gte :` greater-than-equal-to

Example : db.products.find({'price':{$gte:1999} })

Output : [
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
]

- `$lt:` less-than

Example :  db.products.find({'price':{$lt:2} })

Output: [
  {
    _id: ObjectId('64c23e543e180eb8a268302f'),
    name: 'Small Fresh Ball',
    company: ObjectId('64c23350e32f4a51b19b924c'),
    price: 1,
    colors: [ '#176e6d' ],
    image: '/images/product-Oriental.png',
    category: ObjectId('64c2342de32f4a51b19b9252'),
    isFeatured: false,
    __v: 0
  },
  {
    _id: ObjectId('64c23edf9dc1fb2f856019ba'),
    name: 'Tasty Cotton Shoes',
    company: ObjectId('64c23350e32f4a51b19b924b'),
    price: 1,
    colors: [ '#7d4625' ],
    image: '/images/product-Luxurious.png',
    category: ObjectId('64c2342de32f4a51b19b925e'),
    isFeatured: false,
    __v: 0
  }
]

- `$lte:` less-than-eual-to

Example : db.products.find({'price':{$lte:9} })

Output : [
  {
    _id: ObjectId('64c23e543e180eb8a2683025'),
    name: 'Tasty Concrete Computer',
    company: ObjectId('64c23350e32f4a51b19b9249'),
    price: 9,
    colors: [ '#243172' ],
    image: '/images/product-Licensed.png',
    category: ObjectId('64c2342de32f4a51b19b9258'),
    isFeatured: false,
    __v: 0
  },
  {
    _id: ObjectId('64c23e543e180eb8a268300e'),
    name: 'Recycled Plastic Bacon',
    company: ObjectId('64c23350e32f4a51b19b9240'),
    price: 6,
    colors: [ '#746c54' ],
    image: '/images/product-Sleek.png',
    category: ObjectId('64c2342de32f4a51b19b924e'),
    isFeatured: false,
    __v: 0
  }
]

- `$in:` in-operator

Example :  db.products.find({'price': {$in: [699,129,39]}})

`It will show the price only-in 699,129,29`

Output :

[
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
    _id: ObjectId('64c23601e32f4a51b19b9266'),
    name: 'Fashionable Sunglasses',
    company: '64c23350e32f4a51b19b9234',
    price: 129,
    colors: [ '#000000', '#666666', '#ffcc00' ],
    image: '/images/product-sunglasses.png',
    category: '64c2342de32f4a51b19b9250',
    isFeatured: false
  },
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
]

- `$nin:` not-in-operator

Example : db.products.find({'price': {$nin: [699,129,39]}})

`It will show the excluding : 699,12,39`

Output:

[
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
    _id: ObjectId('64c23601e32f4a51b19b9264'),
    name: 'Smart Watch',
    company: '64c23350e32f4a51b19b9232',
    price: 249,
    colors: [ '#000000', '#ff0000', '#00ff00' ],
    image: '/images/product-smartwatch.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: false
  },
  {
    _id: ObjectId('64c23601e32f4a51b19b9265'),
    name: 'Kitchen Blender',
    company: '64c23350e32f4a51b19b9233',
    price: 89,
    colors: [ '#ffffff', '#ff9900', '#990000' ],
    image: '/images/product-blender.png',
    category: '64c2342de32f4a51b19b924f',
    isFeatured: true
  }
]
