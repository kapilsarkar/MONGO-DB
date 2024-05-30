### LOGICAL OPERATORS IN MONGODB

- `$and`

- `$or`

- `$nor`

- `$not`

### DESCRIPTION

-  `$and :`  Performs a Logical AND Operation on an array of expressions, where all expressions must be true for the document to match


`Command` : { $and: [ { condition1 }, { condition2 }, ... ]}

`Example` : Find Products with price greater than 100 and name equal to 'Diamond Ring'

 ` db.products.find({$and:[{'price':{$gt:100}},{'name':'Diamond Ring'}]})`

 Output :

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


-  `$or :` Performs a Logical OR operation on an array of expressions,  where at lest one expression must be true for the document to match

`Command` : { $or: [ { condition1 }, { condition2 }, ... ]}

`Example` : Find Products with price greater than 7000 and name equal to 'Diamond Ring'


` db.products.find({$or:[{'price':{$gt:7000}},{'name':'Diamond Ring'}]})`

Output :

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


- `nor:` Performs a Logical NOR operation on an array of expressions , where none of the expressions must be true for the document to match.

`Command` : { $nor: [ { condition1 }, { condition2 }, ... ]}

`Example` : Find Products with price not equal to 20 and name equal to 'Notebook Collection '

`db.products.find({$nor:[{'price':{$gt:20}},{'name':'Notebook Collection'}]})`

Output :

`shop> db.products.find({$nor:[{'price':{$gt:20}},{'name':'Notebook Collection'}]})
[
  {
    _id: ObjectId('64c23601e32f4a51b19b9270'),
    name: 'Healthy Snack Pack',
    company: '64c23350e32f4a51b19b923e',
    price: 19,
    colors: [ '#ffffff', '#ffcc00', '#99cc00' ],
    image: '/images/product-snack-pack.png',
    category: '64c2342de32f4a51b19b9256',
    isFeatured: true
  },
  {
    _id: ObjectId('64c236a2e32f4a51b19b9285'),
    name: 'Healthy Snack Pack',
    company: '64c23350e32f4a51b19b923e',
    price: 19,
    colors: [ '#ffffff', '#ffcc00', '#99cc00' ],
    image: '/images/product-snack-pack.png',
    category: '64c2342de32f4a51b19b9256',
    isFeatured: true
  }
]`

- `$not:` Performs a Logical NOT Operation on the specified expression, inverting the result

`Command` : { field: { $not: { operator: value } } }

`Example` : Find Products with price not equal to 100

`db.products.find({'price': {$ne:100}})`

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






