const axios = require('axios');
let url = 'https://random-words-api.vercel.app/word';

axios.get(url).then((res)=>{
console.log(res.data)
});
