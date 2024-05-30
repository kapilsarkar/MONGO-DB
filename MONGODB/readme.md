## MONGODB ALL PRACTICE CODE 



### BASIC COMMANDS TO START MONGODB

- `mongosh :`  To Start Mongo-Shell

- `show dbs :` To View All Data-Bases

- `use shop:` Creating Shop Data-Base

- `show collections :` To see all the collections inside shop data-base

- `db.createCollection('<collection-name>’) : ` To Create Collections

- `db.<collection-name>.drop():` To Delete Collections

- `db.dropDatabase():` To Drop Data-Base



### CREATION AND INSERTION OF DATA INSIDE MONGODB

students> use student
switched to db student

- `For Creating Collections:`
student> db.createCollection('data')
{ ok: 1 }

- `For Inserting One Data:`
student> db.data.insertOne({'name':'Kapil',age:32})
{
  acknowledged: true,
  insertedId: ObjectId('66441110832f83448e46b799')
}

- `For Inserting Many Data `
student> db.data.insertMany([{'name':'Kapil',age:32},{'name':'John',age:44},{'name':'Sachin',age:50}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66441286832f83448e46b79a'),
    '1': ObjectId('66441286832f83448e46b79b'),
    '2': ObjectId('66441286832f83448e46b79c')
  }
}


- `For Find All Data:`
 db.data.find()
[
  { _id: ObjectId('66441110832f83448e46b799'), name: 'Kapil', age: 32 },
  { _id: ObjectId('66441286832f83448e46b79a'), name: 'Kapil', age: 32 },
  { _id: ObjectId('66441286832f83448e46b79b'), name: 'John', age: 44 },
  {
    _id: ObjectId('66441286832f83448e46b79c'),
    name: 'Sachin',
    age: 50
  }
]

- `For Inserting One Data:`
student> db.data.insertOne({'name':'Kapil',age:32,'course-name':'ComputerScience'})
{
  acknowledged: true,
  insertedId: ObjectId('6644144f832f83448e46b79d')
}

- `For Finding All Data:`
student> db.data.find()
[
  { _id: ObjectId('66441110832f83448e46b799'), name: 'Kapil', age: 32 },
  { _id: ObjectId('66441286832f83448e46b79a'), name: 'Kapil', age: 32 },
  { _id: ObjectId('66441286832f83448e46b79b'), name: 'John', age: 44 },
  {
    _id: ObjectId('66441286832f83448e46b79c'),
    name: 'Sachin',
    age: 50
  },
  {
    _id: ObjectId('6644144f832f83448e46b79d'),
    name: 'Kapil',
    age: 32,
    'course-name': 'ComputerScience'
  }
]



- `For Finding Data with specific field:`
student> db.data.find({'name':'Kapil'})
[
  { _id: ObjectId('66441110832f83448e46b799'), name: 'Kapil', age: 32 },
  { _id: ObjectId('66441286832f83448e46b79a'), name: 'Kapil', age: 32 },
  {
    _id: ObjectId('6644144f832f83448e46b79d'),
    name: 'Kapil',
    age: 32,
    'course-name': 'ComputerScience'
  }
]


- `For Find One Sing Data with the specific Field:`
student> db.data.findOne({'name':'Kapil'})
{ _id: ObjectId('66441110832f83448e46b799'), name: 'Kapil', age: 32 }



### IMPORTING JSON DATA IN MONGODB

- Command

`mongoimport jsonfile.json –d database_name –c collection_name`

- Example 

mongoimport D:\mongoimport\products.json -d shop -c products

- Output

C:\Users\kapil>mongoimport D:\mongoimport\products.json -d shop -c products
2024-05-16T07:22:02.126+0530    connected to: mongodb://localhost/
2024-05-16T07:22:02.351+0530    10355 document(s) imported successfully. 0 document(s) failed to import.

### IMPORT ARRAY OF OBJECTS OR JSON ARRAY

- Command

`mongoimport products.json -d shop -c products --jsonArray`

- Example

mongoimport D:\mongoimport\sales.json -d shop -c sales --jsonArray

`Here, --jsonArray accepts the import of data expressed with multiple MongoDB documents within a single JSON array.`



- Output

C:\Users\kapil>mongoimport D:\mongoimport\sales.json -d shop -c sales --jsonArray
2024-05-16T07:30:08.202+0530    connected to: mongodb://localhost/
2024-05-16T07:30:08.228+0530    5 document(s) imported successfully. 0 document(s) failed to import.

### EXPORTING JSON DATA IN MONGODB

- Command

`mongoexport –d database_name –c collection_name -o outpfile.json`

- Example 

mongoexport -d shop -c sales -o D:\mongoimport\salestest.json

- Output

C:\Users\kapil>mongoexport -d shop -c sales -o D:\mongoimport\salestest.json
2024-05-16T07:42:49.944+0530    connected to: mongodb://localhost/
2024-05-16T07:42:49.974+0530    exported 5 records



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

- `$eq` : equal-to

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

### PROJECTION IN MONGODB

Command : `db.collection.find({}, { field1: 1, field2: 1 })`

Description :
 -   To include specific fields, use projection with a value of 1 for the fields you want.

- To exclude fields, use projection with a value of 0 for the fields you want to exclude.

-  You cannot include and exclude fields simultaneously in the same query projection.

Example-1 :
  
Command : `db.comments.find({'comments':{$size:2}},{comments:1})`

Output: `[
  {
    _id: 2,
    comments: [
      { user: 'Charlie', text: 'Very informative!' },
      { user: 'David', text: 'Well explained.' }
    ]
  },
  {
    _id: 5,
    comments: [
      { user: 'Ivy', text: 'Very practical advice!' },
      { user: 'Jack', text: 'Helped me a lot.' }
    ]
  },
  {
    _id: 4,
    comments: [
      { user: 'Grace', text: 'Mind-blowing content!' },
      { user: 'Henry', text: 'Impressive examples.' }
    ]
  },
  {
    _id: 6,
    comments: [
      { user: 'Kevin', text: 'Invaluable insights!' },
      { user: 'Lily', text: 'Well-structured explanations.' }
    ]
  },
  {
    _id: 7,
    comments: [
      { user: 'Alice', text: 'Awesome article!' },
      { user: 'Vinod', text: 'Thanks for sharing.' }
    ]
  },
  {
    _id: 3,
    comments: [
      { user: 'Eva', text: 'Very helpful!' },
      { user: 'Frank', text: 'Clear explanations.' }
    ]
  }
]`

Example-2 : 

Command : ` db.comments.find({'comments':{$size:2}},{title:1})`

Output : `[
  { _id: 2, title: 'Deep Dive into Aggregation Framework' },
  { _id: 5, title: 'Optimizing MongoDB Performance' },
  { _id: 4, title: 'Advanced Queries in MongoDB' },
  { _id: 6, title: 'Schema Design Best Practices' },
  { _id: 7, title: 'Introduction to MongoDB' },
  { _id: 3, title: 'Getting Started with NoSQL Databases' }
]`


### MANAGING EMBEDDED DOCUMENTS IN MONGODB


Dealing with Arrays and Objects

Query documents inside embedded documents using dot notation.

Command : `db.collection.find({ “parent.child”: value })`

Example-1 : Find Posts with comments by a specific user (Array)?

`db.comments.find({'comments.user':'Lily'})`

Output:

`[
  {
    _id: 6,
    title: 'Schema Design Best Practices',
    content: 'Designing schemas for optimal performance...',
    author: 'Emily Brown',
    comments: [
      { user: 'Kevin', text: 'Invaluable insights!' },
      { user: 'Lily', text: 'Well-structured explanations.' }
    ],
    metadata: { views: 700, likes: 65 }
  }
]`


Example-2 : Find the documents where the views in metadata field > 1200

` db.comments.find({'metadata.views':{$gt:1200}})`

Output:

`[
  {
    _id: 4,
    title: 'Advanced Queries in MongoDB',
    content: 'Learn how to write complex queries...',
    author: 'Michael Johnson',
    comments: [
      { user: 'Grace', text: 'Mind-blowing content!' },
      { user: 'Henry', text: 'Impressive examples.' }
    ],
    metadata: { views: 1500, likes: 60 }
  }
]`

Example-3 : We need to find out the document where the user in comments = Henry and also in the metadata likes value > 50.

`db.comments.find({'comments.user':'Henry','metadata.likes':{$gt:50}})`

output:

`[
  {
    _id: 4,
    title: 'Advanced Queries in MongoDB',
    content: 'Learn how to write complex queries...',
    author: 'Michael Johnson',
    comments: [
      { user: 'Grace', text: 'Mind-blowing content!' },
      { user: 'Henry', text: 'Impressive examples.' }
    ],
    metadata: { views: 1500, likes: 60 }
  }
]`

Example-3 : We need to return an comments array which must have this user alice and vinod eleemnts only in it?

`db.comments.find({'comments.user':'Alice','comments.user':'Vinod'})`

Output:

`[
  {
    _id: 7,
    title: 'Introduction to MongoDB',
    content: 'MongoDB is a popular NoSQL database...',
    author: 'Vinod Thapa',
    comments: [
      { user: 'Alice', text: 'Awesome article!' },
      { user: 'Vinod', text: 'Thanks for sharing.' }
    ],
    metadata: { views: 1000, likes: 70 }
  }
]`

### COMPARING "$all" and "$elemMatch" Operators


- The $all operator selects the documents where the value of a field is an array that contains all the specified elements.
{ <field>: { $all: [ <value1> , <value2> ... ] } }


- The $elemMatch operator matches documents that contain an array field with at least one element that matches all the specified query criteria.
{ <field>: { $elemMatch: { <query1>, <query2>, ... } } }

Example of `$all` : We need to return an comments array which must have this user alice and vinod eleemnts only in it?

` db.comments.find({'comments.user': {$all:['Alice','Vinod']}})`

Output:

`[
  {
    _id: 7,
    title: 'Introduction to MongoDB',
    content: 'MongoDB is a popular NoSQL database...',
    author: 'Vinod Thapa',
    comments: [
      { user: 'Alice', text: 'Awesome article!' },
      { user: 'Vinod', text: 'Thanks for sharing.' }
    ],
    metadata: { views: 1000, likes: 70 }
  }
]`


Example of `$elemMatch` : We need to return an comments array which must have this user must be 'Vinod' and text must be 'Thanks for sharing.' ?

`db.comments.find({'comments':{$elemMatch:{'user':'Vinod','text':'Thanks for sharing.'}}})`

Output:

`[
  {
    _id: 7,
    title: 'Introduction to MongoDB',
    content: 'MongoDB is a popular NoSQL database...',
    author: 'Vinod Thapa',
    comments: [
      { user: 'Alice', text: 'Awesome article!' },
      { user: 'Vinod', text: 'Thanks for sharing.' }
    ],
    metadata: { views: 1000, likes: 70 }
  }
]`

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

### ADDITION AND DELETION IN MONGODB

`Sample-Data` : `[
  {
    _id: 2,
    title: 'Deep Dive into Aggregation Framework',
    content: 'The aggregation framework in MongoDB...',
    author: 'Jane Smith',
    comments: [
      { user: 'Charlie', text: 'Very informative!' },
      { user: 'David', text: 'Well explained.' }
    ],
    metadata: { views: 800, likes: 70 }
  }
]`

`Example-1`: Add a new user in the above data

Command : `db.comments.updateOne({_id:2},{$set:{'user':'Hrithik'}})`

Output : `{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}`

Updated-Output :

`[
  {
    _id: 2,
    title: 'Deep Dive into Aggregation Framework',
    content: 'The aggregation framework in MongoDB...',
    author: 'Jane Smith',
    comments: [
      { user: 'Charlie', text: 'Very informative!' },
      { user: 'David', text: 'Well explained.' }
    ],
    metadata: { views: 800, likes: 70 },
    user: 'Hrithik'
  }
]`

`Example-2`: Delete the data with _id:2

Command : `db.comments.updateOne({_id:2},{$unset:{'user':1}})`

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
    _id: 2,
    title: 'Deep Dive into Aggregation Framework',
    content: 'The aggregation framework in MongoDB...',
    author: 'Jane Smith',
    comments: [
      { user: 'Charlie', text: 'Very informative!' },
      { user: 'David', text: 'Well explained.' }
    ],
    metadata: { views: 800, likes: 70 }
  }
]`


### UPDATE EMBEDDED DOCUMENTS IN MONGODB

Example : How do you add a new element to an array using the $push operator ?

Sample-Command : `db.comments.find({_id:5})`

Sample-Data : `[
  {
    _id: 5,
    title: 'Optimizing MongoDB Performance',
    content: 'Tips and tricks to improve MongoDB performance...',
    author: 'Alex Turner',
    comments: [
      { user: 'Ivy', text: 'Very practical advice!' },
      { user: 'Jack', text: 'Helped me a lot.' }
    ],
    metadata: { views: 900, likes: 55 }
  }
]`

`Now we are going to add a new user using $push inside the array`


Command : `db.comments.updateOne({_id:5},{$push:{comments:{user:'John',text:'Never Give Up'}}})`

Output : `{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}`

Updated-Data : ` db.comments.find({_id:5})
[
  {
    _id: 5,
    title: 'Optimizing MongoDB Performance',
    content: 'Tips and tricks to improve MongoDB performance...',
    author: 'Alex Turner',
    comments: [
      { user: 'Ivy', text: 'Very practical advice!' },
      { user: 'Jack', text: 'Helped me a lot.' },
      { user: 'John', text: 'Never Give Up' }
    ],
    metadata: { views: 900, likes: 55 }
  }
]`

`Updating a field within an embedded document :`

Example : Update the text value within the comments array = "Awesome Kapil !,where the id = 7 and username = Alice"

Sample-Command : `db.comments.find({_id:7,'comments.user':'Alice'})`

Sample-Data: `[
  {
    _id: 7,
    title: 'Introduction to MongoDB',
    content: 'MongoDB is a popular NoSQL database...',
    author: 'Vinod Thapa',
    comments: [
      { user: 'Alice', text: 'Awesome article!' },
      { user: 'Vinod', text: 'Thanks for sharing.' }
    ],
    metadata: { views: 1000, likes: 70 }
  }
]`

Command : `db.comments.updateOne({_id:7,'comments.user':'Alice'},{$set:{'comments.$.text':'Awesome Kapil'}})`

Output : `{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}`

Updated-Output : `[
  {
    _id: 7,
    title: 'Introduction to MongoDB',
    content: 'MongoDB is a popular NoSQL database...',
    author: 'Vinod Thapa',
    comments: [
      { user: 'Alice', text: 'Awesome Kapil' },
      { user: 'Vinod', text: 'Thanks for sharing.' }
    ],
    metadata: { views: 1000, likes: 70 }
  }
]`

`DELETION :`

In MONGODB  the DELETE  Operations are used to remove documents from a collection. There are two main methods to perform deletion : deleteOne() and deleteMany()

`Delete a Single Document :`

Command : ` db.comments.deleteOne({_id:1})`

Output: `{ acknowledged: true, deletedCount: 1 }`

`Delete a Multiple Document :`

Example : Delete multiple documents in the products field where the price:55


Sample - Command : ` db.products.find({'price':55})`

Sample-Output : `[
  {
    _id: ObjectId('64c23edf9dc1fb2f85601b55'),
    name: 'Unbranded Metal Soap',
    company: ObjectId('64c23350e32f4a51b19b9233'),
    price: 55,
    colors: [ '#3f321d' ],
    image: '/images/product-Awesome.png',
    category: ObjectId('64c2342de32f4a51b19b924f'),
    isFeatured: false,
    __v: 0
  },
  {
    _id: ObjectId('64c23edf9dc1fb2f856025ca'),
    name: 'Gorgeous Fresh Salad',
    company: ObjectId('64c23350e32f4a51b19b924a'),
    price: 55,
    colors: [ '#746377' ],
    image: '/images/product-Bespoke.png',
    category: ObjectId('64c2342de32f4a51b19b9250'),
    isFeatured: false,
    __v: 0
  },
  {
    _id: ObjectId('64c23edf9dc1fb2f85602628'),
    name: 'Electronic Steel Pants',
    company: ObjectId('64c23350e32f4a51b19b924c'),
    price: 55,
    colors: [ '#377f44' ],
    image: '/images/product-Small.png',
    category: ObjectId('64c2342de32f4a51b19b925c'),
    isFeatured: false,
    __v: 0
  },
  {
    _id: ObjectId('64c23edf9dc1fb2f85602796'),
    name: 'Practical Rubber Keyboard',
    company: ObjectId('64c23350e32f4a51b19b924b'),
    price: 55,
    colors: [ '#0c3c05' ],
    image: '/images/product-Licensed.png',
    category: ObjectId('64c2342de32f4a51b19b9250'),
    isFeatured: false,
    __v: 0
  },
  {
    _id: ObjectId('64c23f13f8ffc4957dc4ef39'),
    name: 'Sleek Steel Fish',
    company: ObjectId('64c23350e32f4a51b19b9249'),
    price: 55,
    colors: [ '#057725' ],
    image: '/images/product-Awesome.png',
    category: ObjectId('64c2342de32f4a51b19b924f'),
    isFeatured: false,
    __v: 0
  },
  {
    _id: ObjectId('64c23f13f8ffc4957dc4f308'),
    name: 'Ergonomic Wooden Fish',
    company: ObjectId('64c23350e32f4a51b19b923f'),
    price: 55,
    colors: [ '#30030f' ],
    image: '/images/product-Handcrafted.png',
    category: ObjectId('64c2342de32f4a51b19b925f'),
    isFeatured: false,
    __v: 0
  }
]`
 
Command : `db.products.deleteMany({price:55})`

Output : `{ acknowledged: true, deletedCount: 6 }`


### INDEXES IN MONGODB

Indexes are specialized data structures that optimize data retrieval speed in MongoDB.

- Indexes store a fraction of data in a more searchable format.

- They enable MongoDB to locate data faster during queries.

- Indexes are separate from collections and multiple indexes can exist per collection.


Creating Indexes : 

- Indexes can be created using the createIndex() method.

- `Command :` `db.collectionName.createIndex({fieldName:1})`

- In this case, 1 represents ascending order,and -1 would be descending order.

Getting Indexes :

- `Command : ` `db.products.getIndexes()`

- _id is automatically added by mongodb and it's a default unique index.

Example-1 : Creating a Index for name.

- `Command :` `db.products.createIndex({'name':1})`

- Output : `name_1`

Example-2 : Drooping  a Index for name.

- `Command :`  `db.products.dropIndex({name:1})`

- Output : `{ nIndexesWas: 2, ok: 1 }`

Example-3 : Creating a Unique Index.

- `Command :` `db.users.createIndex({email:1},{unique:true})`



When not to Create a Index :

- Indexes on Rarely Used Fields : Indexing fields that are seldom used in queries can consume unnecessary space and resources.

- Balancing Act : Indexing requires disk space and memory. Over indexing can lead to resource strain and impact overall performance.

- Indexing Small Collections : In smaller collections, the cost of index maintenance might outweigh the benefits gained from querying


### AGGREGATION FRAMEWORK IN MONGODB

- `Definition` : Aggregation is the process of performing transformations on documents and combining them to produce computed results.

- `Pipeline Stages` : Aggregations consist of multiple pipeline stages, each performing a specific operation on the input data.

- `Benefits` :

1. Aggregating Data: Complex calculations and operations are possible.

1. Advanced Transformations: Data can be combined, reshaped, and computed for insights.

1. Efficient Processing: Aggregation handles large datasets efficiently.


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


### $sort :

Example : From the products field find price greater than 1200 group by company name and also sum their prices in descending order using $sort?

Sorting According to descending order:

Command : `db.products.aggregate([{$match:{price:{$gt:1200}}},{$group:{_id:"$category",totalPrice:{$sum:"$price"}}},{$sort:{totalPrice:-1}}])`

Output : `[
  { _id: '64c2342de32f4a51b19b9259', totalPrice: 3998 },
  { _id: '64c2342de32f4a51b19b924e', totalPrice: 1299 }
]`

Sorting According to ascending order:

Command : `db.products.aggregate([{$match:{price:{$gt:1200}}},{$group:{_id:"$category",totalPrice:{$sum:"$price"}}},{$sort:{totalPrice:1}}])`

Output: `[
  { _id: '64c2342de32f4a51b19b924e', totalPrice: 1299 },
  { _id: '64c2342de32f4a51b19b9259', totalPrice: 3998 }
]`



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

### $push :

- The $push stage adds elements to an array field within documents.

Example : Find document with price greater than 1200, then group them by price and create an array of colors for each group ?

Command : `db.products.aggregate([{$match:{price:{$gt:1200}}},{$group:{_id:'price',allColors:{$push:'$colors'}}}])`

Output: `[
  {
    _id: 'price',
    allColors: [
      [ '#333333', '#cccccc', '#00ff00' ],
      [ '#000000', '#cc6600', '#663300' ],
      [ '#000000', '#cc6600', '#663300' ]
    ]
  }
]`

- But If want the output in a single array then we have to use $unwind 

### $unwind :

- The $unwind stage deconstructs an array field and produces multiple documents.

Command : `db.products.aggregate([{$unwind:'$colors'},{$match:{price:{$gt:1200}}},{$group:{_id:'price',allColors:{$push:'$colors'}}}])`

Output: `[
  {
    _id: 'price',
    allColors: [
      '#333333', '#cccccc',
      '#00ff00', '#000000',
      '#cc6600', '#663300',
      '#000000', '#cc6600',
      '#663300'
    ]
  }
]`

- But there are similar data in the array so to avoid that we use $addToSet in place of $push

### $addToSet :

- The $addToSet stage adds elements to an array field while preventing duplicates

Command : `db.products.aggregate([{$unwind:'$colors'},{$match:{price:{$gt:1200}}},{$group:{_id:'price',allColors:{$addToSet:'$colors'}}}])`

Output : `[
  {
    _id: 'price',
    allColors: [
      '#00ff00',
      '#333333',
      '#000000',
      '#cc6600',
      '#663300',
      '#cccccc'
    ]
  }
]`

### $filter :

- The $filter stage filters elements of an array based on specified conditions.

### MONGODB ATLAS :


- MongoDB Atlas is MongoDB's fully managed cloud database service.

- It offers an easy way to deploy, manage, and scale MongoDB databases in the cloud.

- Atlas eliminates the need for manual setup and maintenance, allowing developers to focus on their applications.

- It provides automated scaling options to accommodate growing workloads.

- Atlas supports global clusters, enabling databases to be deployed across multiple regions for better data availability and reduced latency.

- `Alas server as your database service provider.Data is hosted on Atlas and for data manipulation. `

- `Two Options are available .Compass offering a graphical interface and mongoshell a command line tool. Both tools facilitate data management and interaction with atlas.`


### CLUSTERS IN MONGODB :

In MongoDb a Cluster refers to a group of interconnected servers (nodes) that work together to manage data.

Name of Cluster : `Cluster0`

UserName : `ksarkar81`

Password: `12345`

ConnectionString : `mongosh "mongodb+srv://cluster0.fpbpqh8.mongodb.net/" --apiVersion 1 --username ksarkar81`

After typing this connection string on cmd we got enter the password the we get the output as :

Output :
 `Current Mongosh Log ID: 6656933d623f81c8d746b798
Connecting to:          mongodb+srv://<credentials>@cluster0.fpbpqh8.mongodb.net/?appName=mongosh+2.2.5
Using MongoDB:          7.0.8 (API Version 1)
Using Mongosh:          2.2.5
mongosh 2.2.6 is available for download: https://www.mongodb.com/try/download/shell

For mongosh info see: https://docs.mongodb.com/mongodb-shell/`

 `Now it is same like before we were playing with database hosted in our localhost but now we are connected to the live database.Rest Everything is same.`

 Connection string for MongoDB Compass : `mongodb+srv://ksarkar81:<password>@cluster0.fpbpqh8.mongodb.net/`

Password: `12345`

### COMMAND ON MONGO-DB SHELL VS COMPASS

- Command on Shell :  `db.products.find({'price':{$gt:1200}}).limit(1)`

Output On shell `[
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
]`

- Command on Compass : `{price:{$gt:1200}}` and set the limit to 1 from Options

Output On Compass :
 
`{
  "_id": {
    "$oid": "64c23601e32f4a51b19b9263"
  },
  "name": "Laptop Pro",
  "company": "64c23350e32f4a51b19b9231",
  "price": 1299,
  "colors": [
    "#333333",
    "#cccccc",
    "#00ff00"
  ],
  "image": "/images/product-laptop.png",
  "category": "64c2342de32f4a51b19b924e",
  "isFeatured": true
}`


### MONGODB DRIVERS : 

- Software libraries that allow applications to interact with MongoDB databases.

- MongoDB offers official and community-supported drivers for various programming languages.

- Drivers provide APIs tailored to specific programming languages.


### WORKING WITH MONGOOSE :

- It's an Object Data Modeling (ODM) library for MongoDB and Node.js.

- It makes MongoDB interaction more straightforward and organized.

- It provides a structured, schema-based data modeling approach.



`Why Mongoose instead of official driver?`

1. Structured Schemas : Mongoose lets you define your data structure using schemas which makes it easier to understand your database structure and work with it.

1. Validation : Mongoose provides built-in validation to ensure validity before saving it to database.

1. Relationships : MongoDB doesn’t provide relations itself. So, Mongoose helps to replicate relations in MongoDB and helps us to relate schemas with each
other easily (one-toone, one-to-many, etc.)

1. Middleware : Mongoose offer running custom functions before or after certain operations which can be useful in many cases.


