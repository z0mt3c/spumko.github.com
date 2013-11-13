---
layout: default
title: hapi by walmartlabs
video: q6Aofj2XDwE
---

##Usage

The following is a simple "hello world" service with a single API endpoint:
{% highlight javascript %}
var Hapi = require('hapi');

// Create a server with a host, port, and options
var server = new Hapi.Server('localhost', 8080);

// Define the route
var hello = {
    handler: function (request) {

        request.reply({ greeting: 'hello world' });
    }
};

// Add the route
server.addRoute({
    method : 'GET',
    path : '/hello',
    config : hello
});

// Start the server
server.start();
{% endhighlight %}

Now navigate to <a href="http://localhost:8080/hello">http://localhost:8080/hello</a> and you should receive 'hello world'.
