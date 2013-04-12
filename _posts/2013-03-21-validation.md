---
layout: example
title: Validation
category: example
---

#Validation

To demonstrate one of the more powerful features in **hapi** we will create a route to only respond whenever a _'name'_ is present on the querystring.

Start by creating a _package.json_ by running:

```bash
npm init
```

Now install **hapi** and have it saved to your _package.json_ dependencies by running

```bash
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

        request.reply({ greeting: 'hello ' + request.query.name });
    },
    validate: {
        query: {
            name: Hapi.Types.String().required()
        }
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

When you start the server with `node .` and navigate to 'http://localhost:8000/hello' you will get a 400 response with an error explaining that 'name' is required.  When the 'name' is omitted from the querystring the handler will not be called.  However, if you do provide a 'name' it will be echoed out in the response.  If you request 'http://localhost:8000/hello?name=John' then you will get the following response:

```json
{"greeting":"hello John"}
```

To learn more about the various validation options you can read the [validation section](/resource/api/#data-validation) in the reference.
