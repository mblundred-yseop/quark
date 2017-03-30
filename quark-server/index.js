var express = require('express');
var Nuts = require('nuts-serve').Nuts;
var githubAuth = require('./githubAuth');

var app = express();

var nuts = Nuts({
    // GitHub configuration
    repository: githubAuth.repo,
    token: githubAuth.token
});

app.use('/', nuts.router);
app.listen(8080);