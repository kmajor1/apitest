// connect to face ++ API 
var imgUrl = 'https://kmajor1.github.io/apitest/barack.jpg';
var config = {
    api_key: 'pKRNP7idVtOyasyMJnXlqmiEdEFqMQqo',
    api_secret: 'WeZwkBquRvK4iUfVUnfnGviTwBsg1fJb',
    image_url: imgUrl,
    type: 'POST', 

}

var url = 'https://api-us.faceplusplus.com/facepp/v3/detect?api_key=pKRNP7idVtOyasyMJnXlqmiEdEFqMQqo&api_secret=WeZwkBquRvK4iUfVUnfnGviTwBsg1fJb&image_url=https://kmajor1.github.io/apitest/barack.jpg';

console.log(config.apiUrl);


// config object 


$.ajax({
    method: 'POST',
    URL: url,
    contentType: 'application/json'
}).then(function (response) {
    alert('worked');
    console.log(response);
}, function (err) {
    console.log(err);
})