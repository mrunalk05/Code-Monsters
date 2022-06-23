onclick.getelementById('switch1');{
    let xhr = new XMLHttpRequest();
xhr.open("POST", "https://newslet-server.herokuapp.com/cafeteria");

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => console.log(xhr.responseText);

let data = `{
  "cafe":"lipton",
}`;

xhr.send(data);
}

onclick.getelementById('switch2');{
    let xhr = new XMLHttpRequest();
xhr.open("POST", "https://newslet-server.herokuapp.com/cafeteria");

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => console.log(xhr.responseText);

let data = `{
  "cafe":"sagar",
}`;

xhr.send(data);
}
//© 2022 GitHub, Inc.