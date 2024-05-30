### ELEMENTS OPERATOR IN MONGODB

- `$exists :` Matches Documents that have a specific value,regardless of its value

   Command : `db.products.find({price:{$exists:true}}).count()`

   Example : Find documents with the "price" field present,and if present then check the value greater than 1200?
   
   Command : `db.products.find({price:{$exists:true},price:{$gt:1200}})`

   Output : `[
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

 

- `$type :` The $type operator filters documents based on the BSON data type of a field.Basically we need to search or find the fields based on types(BSON type)

  Examples:   -  `db.products.find({price:{$type:'number'}})`
              -  `db.products.find({price:{$type:'string'}})`

- `$size :` The $size operator matches documents where the size of an array field matches a specified field

   Command : ` db.comments.find({'comments':{$size:4}})`

   Output : `[
  {
    _id: 1,
    title: 'Introduction to MongoDB',
    content: 'MongoDB is a popular NoSQL database...',
    author: 'John Doe',
    comments: [
      { user: 'Alice', text: 'Great article!' },
      { user: 'Bob', text: 'Thanks for sharing.' },
      { user: 'Eva', text: 'Its beatifull!' },
      { user: 'jessy' }
    ],
    metadata: { views: 1000, likes: 50 }
  }
]`

