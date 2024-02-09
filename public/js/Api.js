// restaurant variables

const apiKey = '5tkVDO8SKlJuurEYCWCave8z96kny6KhwC0AJ_NtIcb8zc_Vx2rZmO7l9X5q5aeYaKUiLvVftUYxk6NHVAbIDsjFr04yewipKMAnKrClMvxq2WlEWCsD7RRBRYzBZXYx';
const url = 'https://api.yelp.com/v3/businesses/search/phone?phone=%2B17325717900';
const options = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
  
};


// Function to fetch Restaurant data
fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

  
     
// Function to fetch Restaurant data //
async function fetchEvent(restaurants) {
    return fetch(`${restaurantApiUrl}&q=${restaurants}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
        var today = new Date()
           return data.restaurants.filter(function (restaurant){
            var restaurantDate = new Date (restaurant.datetime_utc.substring(0,10))
            return restaurantDate !== today
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}
    

