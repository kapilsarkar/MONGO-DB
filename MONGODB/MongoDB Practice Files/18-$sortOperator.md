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






