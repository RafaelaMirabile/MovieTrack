# MovieTrack

For those who like to keep track of movie whatch list.

## About

Back-end for MovieTrack, an app that organize your movies wishlist and also let you rank and write reviews.

## How to run for development

1.Clone this repository
2.Install all the dependencies 

```bash
npm i
```
3. Create a PostgreSQL database with whatever name you want

```bash
CREATE DATABASE database_name;
```

5. Connect to the database  

```bash
\c database_name;
```

7. Copy the file dump.sql to create the table
8. Create `.env` file using the `.env.example` file;

## Implemented HTTP routers methods

1. post.('/addMovie') recive a body : 

```bash
{
    "title":,
    "banner":,
    "genre":
}
```
All te keys values are strings and banner is an uri.

2.get('/')
3.put('/:movieId) recive a body :

```bash
{
    "rate":
}
```
The key value is a number from 0 to 10, can be a decimal number.
movieId is the id provided from the database.

4.put('/writeReview/:movieId') recive a body :

```bash
{
    "review":
}
```
The key value is a string.
movieId is the id provided from the database.

5. get('/listMovies');
This path has a query parameter. To test this router the URL path is 'listMovies?genre='. You can choose the genre that you classified your movies.

6.delete('/:movieId')
movieId is the id provided from the database.









