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