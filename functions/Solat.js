const http = require('http');

var url = 'http://mpt.i906.my/mpt.json?filter=1&code='

// Handle get req from API
getData = (state) => {
    http.get(url + state, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            return JSON.parse(data);
        });

    }).on("error", (err) => {
        return "Error: " + err.message;
    });
}

// Convert from UNIX to hours and minutes
timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = hour + ':' + min;
    return time;
}

var methods = {
    starter(msg, reply) {
        reply.text('Test solat function. Enter state').then;
        console.log(msg.text)
        if (msg.text == 'johor') {
            state = 'jhr-0'
            let timeData = getData(state)
            reply.text(timeData)
        }
    }
}

module.exports = methods