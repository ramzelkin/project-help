const fs = require('fs-extra');


let filesToCopy = [
    { 
        "src": "./project-help/from/fonts",
        "dest":"./Content/css/from/fonts" 
    },
    { 
        "src": "./project-help/from/style-test-mobile.css",
        "dest":"./Content/css/style-test-mobile.css" 
    },
    { 
        "src": "./project-help/style.css",
        "dest":"./Content/css/style.css" 
    },
    { 
        "src": "./project-help/from/fonts",
        "dest":"./Content/fonts" 
    }
];

for (let i = 0; i < filesToCopy.length; i += 1) {

    try {
        fs.copySync(filesToCopy[i].src, filesToCopy[i].dest)
    } catch (err) {
        console.error(err);
    }
}
