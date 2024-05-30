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





