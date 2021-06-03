const fs = require('fs');

fs.mkdir('/Assets');

fs.copyFile('./from/jquery.min.js', './Assets');
