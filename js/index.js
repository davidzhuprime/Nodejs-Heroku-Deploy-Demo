// const express = require('express')
// const app = express()
// const port = process.env.PORT || 3000
//
// /*
//     Incase you are using mongodb atlas database uncomment below line
//     and replace "mongoAtlasUri" with your mongodb atlas uri.
// */
// // mongoose.connect( mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true})
//
// app.get('/', (req, res) => {
//     res.send('fuck off!')
// })
//
// app.listen(port, () => {
//     console.log(`App listening at http://localhost:${port}`)
// })

let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";
    if (hrs == 0) {
        hrs = 12;
    } else if (hrs >= 12) {
        hrs = hrs - 12;
        period = "PM";
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    let time = `${hrs}:${mins}:${secs}:${period}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
};

clock();
