# key-value

A web app that uses technologies:

**Front End/Client Side**

1. AngularJS framework (and other angular dependencies such as *ngResource, angular-ui-router*)
2. Boostrap (including angular-ui-router)
3. MomentJS - to convert time

**Back End/Server Side**

1. NodeJs
2. ExpressJs
3. Postgresql - database
4. KnexJs

**TDD**

1. Karma
2. Chai
3. Sinon
4. PhantomJs

**Linting**

1. Eslint

##Usage
*Key is required*

***Saving an entry***
* enter key
* enter value
* click submit

***Getting an entry***
* enter key
* enter timestamp -- *optional*

When key entered is not in the database and the value is provided, it will save the entry. If the key exists in the database, it will add a new entry with the new value and generate a new timestamp.
*Please see this [README.md](https://github.com/maodes/key-value/blob/master/services/handlers/README.md) for more info*


##Development

Clone this repository and install dependencies

**Note:** Local machine should have NodeJS, Bower, Phantomjs and Postgresql installed.

***Please create a database in Postgresql and name it "Entries"***

**Install Dependencies**

Please run this in your terminal to install npm dependencies:

```
npm install
```

After installing npm dependencies, please run this to install bower dependencies:

```
bower install
```

After installing all dependencies (assuming you have Postgresql ready in your machine), run:

```
node server
```

To run unit test (client side):
```
npm test
```

Open your browser and go to ```localhost:8080```
