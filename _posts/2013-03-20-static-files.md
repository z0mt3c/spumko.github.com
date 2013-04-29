---
layout: example
title: Static Files
category: example
---

# Serving Static Files
The **hapi** route handler can be used to easily serve files, directories, render templates, and even proxy requests.  In this example the _'directory'_ handler will be used to create a static site serving files in the _'public'_ folder.

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

server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        directory: { path: './public', listing: false, index: true }
    }
});

server.start();
```

Create a folder named _'public'_ and add a _'index.html'_ file in the folder with the following contents:
```html
<html>
    <head><title>Hello Static</title></head>
    <body>
        Hello Static
    </body>
</html>
```

Now when you request 'http://localhost:8000' you will see the html page rendered.  You can add other files in this folder and they will be served.  This is a good solution for serving static assets like images and css files.