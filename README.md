# Linux is Beautiful

Built using React, ExpressJS, NodeJs, Reddis, MySQL
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" width="50" height="50"> <img src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png" width="50" height="50"><img src="https://expressjs.com/images/express-facebook-share.png" width="50" height="50"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/1200px-Node.js_logo_2015.svg.png" width="50" height="50"> <img src="https://www.nditech.org/sites/default/files/styles/small_photo/public/redis-logo.png?itok=LrULOkWT" width="50" height="50">

imagine a website for linux users, where they can come in and buy a laptop or tablet and more ...

##### Installation

The layout is that the react section would be found in the front folder
There are 2 ways to install the packages

First way is by entering the code below

```
npm install && cd front && npm install
```

Or individually go to each page as shown below

```
npm install
cd front
npm install
cd ../  <----- this will take you the main root folder
```

##### Additional requirements

a environmental file needs to be added in both the main root page and the react `/front` folder as there are requirements that are needed to connect to the database, stripe, etc.
So in other words 2 `.env` files are needed

##### Datebase:

Here mySQL was used and was being run in the express environment, however, you are free to change that to whatever liking

##### Caching

Since this is using express-sessions a caching of reddis was used for caching purpose

##### Payment

You would is processed by stripe and therefore you would need the API keys for the stripe payment. You can get the API key from [Here](https://stripe.com/)
