let fs = require('fs');

fs.readFile('./Text/readMe.txt', 'utf-8', (err,data) => {
    fs.writeFile('./Text/writeMe', data, (err) => {
        console.log(err)
    })
});


