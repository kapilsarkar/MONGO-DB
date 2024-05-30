### COMMAND ON MONGO-DB SHELL VS COMPASS

- Command on Shell :  `db.products.find({'price':{$gt:1200}}).limit(1)`

Output On shell `[
  {
    _id: ObjectId('64c23601e32f4a51b19b9263'),
    name: 'Laptop Pro',
    company: '64c23350e32f4a51b19b9231',
    price: 1299,
    colors: [ '#333333', '#cccccc', '#00ff00' ],
    image: '/images/product-laptop.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: true
  },
]`

- Command on Compass : `{price:{$gt:1200}}` and set the limit to 1 from Options

Output On Compass :
 
`{
  "_id": {
    "$oid": "64c23601e32f4a51b19b9263"
  },
  "name": "Laptop Pro",
  "company": "64c23350e32f4a51b19b9231",
  "price": 1299,
  "colors": [
    "#333333",
    "#cccccc",
    "#00ff00"
  ],
  "image": "/images/product-laptop.png",
  "category": "64c2342de32f4a51b19b924e",
  "isFeatured": true
}`