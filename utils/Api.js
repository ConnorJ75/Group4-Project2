//restaurant variables
// const bearerAPI_KEY = '5tkVDO8SKlJuurEYCWCave8z96kny6KhwC0AJ_NtIcb8zc_Vx2rZmO7l9X5q5aeYaKUiLvVftUYxk6NHVAbIDsjFr04yewipKMAnKrClMvxq2WlEWCsD7RRBRYzBZXYx'; 
// const restaurantApiUrl = 'https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972https://api.yelp.com/v3/businesses/client_id=${restaurantAPI_KEY}'; 
    
//     header = {
//         'Authorization' : bearerAPI_KEY
//     }
     
// // Function to fetch Restaurant data //
// async function fetchEvent(restaurants) {
//     return fetch(`${restaurantApiUrl}&q=${restaurants}`)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data){
//         var today = new Date()
//            return data.restaurants.filter(function (restaurant){
//             var restaurantDate = new Date (restaurant.datetime_utc.substring(0,10))
//             return restaurantDate !== today
//             })
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }
    


const fetch = require('node-fetch');

const apiKey = '5tkVDO8SKlJuurEYCWCave8z96kny6KhwC0AJ_NtIcb8zc_Vx2rZmO7l9X5q5aeYaKUiLvVftUYxk6NHVAbIDsjFr04yewipKMAnKrClMvxq2WlEWCsD7RRBRYzBZXYx';
const url = ' https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972';
const options = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));