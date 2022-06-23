onclick.getelementByclass('button');{
    let xhr = new XMLHttpRequest();
xhr.open("POST", "https://newslet-server.herokuapp.com/signin");

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => console.log(xhr.responseText);

let data = `{
  "email":"mrunalkhade35@gmail.com",
  "password":"sangita@123",
}`;

xhr.send(data);
}
