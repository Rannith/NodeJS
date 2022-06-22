import fetch from 'node-fetch';

// async function run() {
//     console.log("start")
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await res.json();
//     console.log(data);
//     console.log("End");
// }

// run()

const run = async() => {
    console.log("start");

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            console.log("getted")
        })
        .then(console.log("end"))
        .catch(err => {
            console.log("error")
        })
    
}

run()