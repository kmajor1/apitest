// connect to face ++ API 
var imgUrl = 'https://kmajor1.github.io/apitest/barack.jpg';
var config = {
    api_key: 'pKRNP7idVtOyasyMJnXlqmiEdEFqMQqo',
    api_secret: 'WeZwkBquRvK4iUfVUnfnGviTwBsg1fJb',
    image_url: imgUrl,
    type: 'POST', 

}

var url = 'https://api-us.faceplusplus.com/facepp/v3/detect'+"?"+"api_key="+config.api_key+"&api_secret="+config.api_secret+"&image_url="+config.image_url;

console.log(config.apiUrl);


// config object 


$.ajax({
    type: config.type,
    URL: url
}).then(function (response) {
    alert('worked');
    console.log(response);
}, function (err) {
    console.log(err);
})