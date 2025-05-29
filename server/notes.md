this is a set of guidelines and rules i am going to follow whenever i need to make a working  backend that is production level i am using javascript mastery as source

1 setup
    npx express-generator --git ./
    npm i --save-dev nodemon
    in package.json add type modules and add dev script as "nodemon app.js"
    linter- npx eslint --init

2 config 
    npm i dotenv
    use config function loads env variables from .env to process.env
