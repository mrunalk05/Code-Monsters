onclick.getelementByclass('new');{
    let xhr = new XMLHttpRequest();
xhr.open("POST", "https://newslet-server.herokuapp.com/signin");

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => console.log(xhr.responseText);

let data = `{
  "Id": 78912,
  "Customer": "Jason Sweet",
}`;

xhr.send(data);
}
