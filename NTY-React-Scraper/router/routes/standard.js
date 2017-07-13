
'use strict';

module.exports = (app, db, approot) => {
    
    var express = require('express');
    var path = require('path');
    app.use('/', express.static(path.join(approot, '/public')));
    
    app.get('/favicon.ico', function(req, res) {
        console.log('standard.js - favicon.ico request, responding with 204');
        res.status(204).send('/favicon.ico does not exist');
    });
};

