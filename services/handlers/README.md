# Handlers

This folder contains files that performs database queries.

## get-entry.js

Get entry from database using the key and timestamp provided by the user

Request parameters needed:
1. key -- *required*
2. timestamp -- *either a unix timestamp or null*

Request will return the row corresponding to the key and timestamp. If timestamp is not given, the latest, it will return the row with the latest update. Row includes: ```key, value, timestamp```


## insert-entry.js

Saves an entry.

Request parameters needed:
1. key -- *required*
2. value
2. timestamp -- *either a unix timestamp or null*


Request will return the data that will be added in the database. It includes ```key, value, timestamp```.
