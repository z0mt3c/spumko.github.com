---
layout: example
title: Hello World
category: example
---

# Hello World

Start by creating a _package.json_ by running
```
npm init
```

Now install **hapi** and have it saved to your _package.json_ dependencies by running
```
npm install hapi --save
```

Next create an _'index.js'_ file and add the following contents to it:
```javascript
var Hapi = require('hapi');

// Create a server with a host and port
var server = Hapi.createServer('localhost', 8000);

// Define the route
var hello = {
    handler: function (request) {

        request.reply({ greeting: 'hello world' });
    }
};

// Add the route
server.route({
    method: 'GET',
    path: '/hello',
    config: hello
});

// Start the server
server.start();
```

Start the server with `node .` and navigate to the website at 'http://localhost:8000/hello' in a browser and you will see the following output:
```json
{"greeting":"hello world"}
```