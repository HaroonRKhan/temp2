const { readFile, writeFile } =require("fs");
console.log("starting");
readFile("./content/first.txt","utf8",  (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    
    readFile("./content/second.txt", "utf8", (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile("./content/result-asyn.txt", `Here is the result: ${first}, ${second}`
        , (err, result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log("done with this task");
        })
    })
})
// if do't use utf8 file system we get buffor instead.
console.log("starting the next one");