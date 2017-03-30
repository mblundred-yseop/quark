var express = require('express');
var Nuts = require('nuts-serve').Nuts;

var app = express();

var nuts = Nuts({
    // GitHub configuration
    repository: "mblundred-yseop/quark",
    token: "c9448a182c48da8ca1409a1eea8b7369454186b7"
});

app.use('/', nuts.router);
app.listen(8080);