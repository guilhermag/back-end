
# User register API

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Endpoints](#endpoints)

## General info
This project is and API made with NodeJS and Postgresql, with the following characteristics:

- Interacts with the database and take care of the constraints.
- Creates, reads, update and delete users from the database.

## Technologies
Project is created with:
* Postgresql version: v14.1 with Elephantsql
* NodeJS version: v16.13.0
* Express framework version: v4.17.2
* Pg library version: v8.7.1
* Cors library version: v2.8.5

## Setup
To run this project, install it locally using npm:

```
$ npm install
$ npm start
```

## Endpoints
The endpoins are:

- GET — /api/v1/candidatos/
- POST — /api/v1/candidatos/
- GET — /api/v1/candidatos/:email
- PUT — /api/v1/candidatos/:email
- DELETE — /api/v1/candidatos/:email

###  GET — /api/v1/candidatos/

Shows the data of all the users in a JSON format.

```
[
    {
        "email": "name1@email.com",
        "nome": "name1",
        "sobrenome": "name1",
        "data_nascimento": "2000-03-14T00:00:00.000Z",
        "cpf": "11111111111",
        "data_criacao": "2022-01-08T18:12:56.109Z",
        "data_atualizacao": "2022-01-08T18:12:56.109Z"
    },
    {
        "email": "name2@gmail.com",
        "nome": "name2",
        "sobrenome": "name2",
        "data_nascimento": "1993-06-08T00:00:00.000Z",
        "cpf": "22222222222",
        "data_criacao": "2022-01-08T18:15:13.054Z",
        "data_atualizacao": "2022-01-08T18:15:13.054Z"
    },
    .
    .
    .
    }
]
```

###  POST — /api/v1/candidatos/

Creates a new user, with these requirements:

- Minimum age of 16 years old.
- The email must be new, the primary key for de database is the email data.
- It's not permitted blank fields.

```
{
    "email": "user_email@email.com",
    "nome": "user_name",
    "sobrenome": "user_lastname",
    "data_nascimento": "YYYY-MM-DD",
    "cpf": "CPF numbers (11 digits, like:22222222222)"
}

```

###  GET — /api/v1/candidatos/:email

Shows the data for a specific user by giving the email as input.

Like in this example for */api/v1/candidatos/name1@email.com*

```
{
    "email": "name1@email.com",
    "nome": "name1",
    "sobrenome": "name1",
    "data_nascimento": "2000-03-14T00:00:00.000Z",
    "cpf": "11111111111",
    "data_criacao": "2022-01-08T18:12:56.109Z",
    "data_atualizacao": "2022-01-08T18:12:56.109Z"
}
```

###  UPDATE — /api/v1/candidatos/:email

Updates the data for a specific user by giving the email as input,
it's possible to change every value of the user, except the email .

Example for */api/v1/candidatos/name1@email.com*

```
[{
    "nome": "user_name",
    "sobrenome": "user_lastname",
    "data_nascimento": "YYYY-MM-DD",
    "cpf": "CPF numbers (11 digits, like:22222222222)"
}]
```

###  DELETE — /api/v1/candidatos/:email

Delete the data for a specific user by giving the email as input.

Like in this example for */api/v1/candidatos/name1@email.com*

