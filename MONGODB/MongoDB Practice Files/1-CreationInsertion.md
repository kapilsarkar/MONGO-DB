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