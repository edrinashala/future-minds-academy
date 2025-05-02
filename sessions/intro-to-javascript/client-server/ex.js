fetch('https://dogapi.dog/api/v2/facts?limit=3')
.then((res)=> res.json())
.then((json)=> processdata(json.data))


function processdata(data) {
    let list = document.createElement('ul');

    data.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element.attributes.body;
        list.appendChild(li)
    });

    document.body.appendChild(list);
}

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));

  function processData(data) {
    data.forEach(item => {
        let div = document.createElement("div");
        let title = document.createElement("h3");
        let image = document.createElement("img");
        let price = document.createElement("p");
        let rating = document.createElement("p");

        title.textContent = item.title;
        image.src = item.image;
        price.textContent = `Price: ${item.price}`;
        rating.textContent= `Rating: ${item.rating.rate}`
        div.appendChild(title)
        div.appendChild(image)
        div.appendChild(price)
        div.appendChild(rating)

        document.body.appendChild(div)
    });
  }
