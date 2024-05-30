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