# Handlers

This folder contains files that performs database queries.

## get-entry.js

Get entry from database using the key and timestamp provided by the user

Request parameters needed:
1. key -- *required*
2. timestamp -- *either a unix timestamp or null*

Request will return the entire row of the key if the key and its corresponding timestamp exists. Row includes: ```key, value, timestamp```


## upsert-entry.js

Updates the entry or saves an entry if it doesn't.

* Checks the key and its corresponding timestamp ( either unix timestamp or null ) if it exists in the database.
* Saves the entry if the combination of the key and timestamp does not exist in the database
* Updates the value of the entry if the combination of the key and timestamp exists in the database.

Request parameters needed:
1. key -- *required*
2. value
2. timestamp -- *either a unix timestamp or null*


Request will return the data that will be added in the database. It includes ```key, value, timestamp```.
