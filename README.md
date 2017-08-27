Server of test project
======================

Provides country list by query string.

Install
-------

1. Confirm you have ```npm``` installed

2. Create and open folder you want to use for tis repo:
```
mkdir server
cd ./server
```

3. Clone this repository:
```
git clone https://github.com/pptp/test20170821.git .
```

4. Install ```npm``` dependencies:
```
npm install
```

5. Start server:
```
npm start
```


Api
---

Server uses port 8080.


```
GET /countries/{query}
```
Returns country list is JSON format by query string

For example:

```
GET http://localhost:8080/countries/ivoire
```

will return 

```
[  
  {  
    "name":"Côte d'Ivoire",
    "topLevelDomain":[  
      ".ci"
    ],
    ...
  }
]
```