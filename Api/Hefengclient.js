var axios = require('axios');
const instance = axios.create({
    baseURL: 'https://provider.dev.fantasysz.com/cmp/api',
    timeout: 1000
  });

function Hefengclient() {
    this.getWeather = async function(){
        let res = await new Promise((resolve, reject)=> {
            instance.get('/manage/sites')
                .then(res => {resolve(res.data.results)})
                .catch(function (error) {
                    console.log(error);
                });
        })
        return res;
    }
}

module.exports = Hefengclient;