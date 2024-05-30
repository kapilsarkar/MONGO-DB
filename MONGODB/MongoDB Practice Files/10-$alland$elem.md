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


