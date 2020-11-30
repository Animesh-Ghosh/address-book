address-book

An address book application using the MEVN stack.

Installation:

1. Install MongoDb
2. Install NodeJS, NPM
4. Install dependencies:

$ cd server/
$ yarn

5. Create an index on mobileNumber field from mongo shell using the following commands:

$ # login to mongo shell
$ mongo
> use address-book
> # create collection to be able to create unique index
> db.createCollection('contacts')
> db.contacts.createIndex({ mobileNumber: 1}, { unique: true })
> exit

6. Start server:

$ cd server/
$ yarn start

7. Go to http://localhost:5000/
