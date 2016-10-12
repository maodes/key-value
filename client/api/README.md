# api

This folder contains files that performs api calls.

## api-factory.js

#### *saveEntry*

Save or update entry in the database. logic for saving and updating is in the [upsert-entry.js](https://github.com/maodes/key-value/blob/master/services/handlers/upsert-entry.js)

* api route : ```/api/v1/entry```
* request body

**key** - ```string```

**value** - ```string```

```
{
	key : value
}
```

example:

```
{
	'Jedi' : 'Skywalker'
}
```


#### *getWithoutTimestamp*

Get entry using the key without the timestamp

* api route : ```/api/v1/entry/:key```
* request parameter:

**key** - ```string```

```
{
	'key' : '@key'
}
```


#### *getWithTimestamp*

Get entry using the key with the corresponding timestamp

* api route : ```/api/v1/entry/:key/timestamp/:timestamp```
* request parameter:

**key** - ```string```
**timestamp** - ```integer``` ```unix timestamp```


```
{
	'key' : '@key',
    'timestamp': '@timestamp'
}
```
