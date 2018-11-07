// connect to face ++ API 
var imgUrl ='https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg';
var config = {
    api_key: 'pKRNP7idVtOyasyMJnXlqmiEdEFqMQqo',
    api_secret: 'WeZwkBquRvK4iUfVUnfnGviTwBsg1fJb',
    image_url: imgUrl,
    type: 'POST', 
    apiUrl: 'https://api-us.faceplusplus.com/facepp/v3/detect'
}
var params = $.param({
    image_url: imgUrl,
    api_secret: config.api_secret,
    api_key: config.api_key
});
console.log(params);
// config object 


$.ajax({
    method: config.method,
    URL: config.apiUrl+"?"+params
}).then(function (response) {
    alert('worked');
    console.log(response);
})