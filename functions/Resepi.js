const https = require('https');

// https.get('https://api.spoonacular.com/recipes/random?number=1&apiKey=c5df1ded17d348fab88dc23a4fb1fc80', res => {
//     let data = ''

//     res.on('data', chunk => {
//         data += chunk;
//     })

//     res.on('end', () => {
//         var url = JSON.parse(data)
//     })
// })

var methods = {
    starter(msg, reply) {
        console.log();
    }
}

module.exports = methods