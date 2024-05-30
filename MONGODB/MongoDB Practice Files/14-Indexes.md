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

