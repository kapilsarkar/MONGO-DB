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


