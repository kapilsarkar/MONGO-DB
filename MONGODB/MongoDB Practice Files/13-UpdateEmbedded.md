### UPDATE EMBEDDED DOCUMENTS IN MONGODB

`ADDITION :`

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










