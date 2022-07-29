# Api Ready to Use Structure

## Version Info

- Use nodejs >= 14.0.0
- Mysql 6.x (if you use 5.x or below then it will returns some errors )

## How to [run](https://docs.adonisjs.com/guides/installation#starting-the-development-server) ?

- clone project and go into project folder
- npm or yarn install
- `node ace serve --watch` to start development server

## Database

we use Mysql so it's configuration for Mysql

- open .env files (if not copy .env.example and change name to .env)
- add `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_DB_NAME`
- restart server
- if you want to configure any other db view [docs](https://docs.adonisjs.com/guides/database/introduction)

## How to make a [build](https://docs.adonisjs.com/guides/installation#compiling-for-production) ?

- npm or yarn install
- setup db in .env and then run `node ace migration:run`
- `node ace build --production`
- for run `cd build` & `node server.js`

## How to make a edge file ?

- open cmd & `node ace make:view <view_name>`

  
# Middleware
- Create Middleware `node ace make:middleware <name>`
