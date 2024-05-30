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



