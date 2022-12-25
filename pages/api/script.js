fetch('https://api.edamam.com/api/recipes/v2/1')
    .then(res=>res.json())
    .then(data=>console.log(data))