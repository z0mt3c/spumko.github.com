---
layout: example
title: Templates
category: example
---

# Rendering Templates
To demonstrate how to use **hapi** to render templates we will be creating a template and rendering it using the [handlebars](http://handlebarsjs.com/) engine.

Start by creating a _package.json_ by running:

```bash
npm init
```

Now install **hapi** and have it saved to your _package.json_ dependencies by running

```bash
npm install hapi --save
```

Next, install **handlebars** by running the following npm command:

```bash
npm install handlebars --save
```

Next create a directory named _'templates'_ that will contain the template files.  In this directory create a _'index.html'_ with the following contents:

```html
{% raw %}
<html>
    <head><title>{{greeting}}</title></head>
    <body>
        {{greeting}}
    </body>
</html>
{% endraw %}
```

The next step is going to be to tell the **hapi** server to use templates and the handlebars engine.  After this, the route handler will be updated to render the template using an object that contains a _'greeting'_ property we want displayed.  Create an _'index.js'_ file and add the following contents:

```javascript
var Hapi = require('hapi');

var options = {
    views: {
        path: 'templates',
        engines: {
            html: 'handlebars'
        }
    }
};

// Create a server with a host, port, and options
var server = Hapi.createServer('localhost', 8000, options);

// Define the route
var hello = {
    handler: function (request) {

      // Render the view with the custom greeting
        request.reply.view('index.html', { greeting: 'hello world' });
    }
};

// Add the route
server.route({
    method: 'GET',
    path: '/',
    config: hello
});

// Start the server
server.start();
```

When you run the server with `node .` and view the homepage you will see the custom greeting message rendered.  More information on using templates with **hapi** can be found in the [views](/resource/api/#server.config.views) section of the [API Reference](/resource/api/).

The main repository also contains example code of a **hapi** setup using
[jade](http://jade-lang.com/). See the [jade
example](https://github.com/spumko/hapi/tree/master/examples/views/jade).
