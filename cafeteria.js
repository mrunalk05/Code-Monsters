onclick.getelementById('switch1');{
    let xhr = new XMLHttpRequest();
xhr.open("POST", "https://reqbin.com/echo/post/json");

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => console.log(xhr.responseText);

let data = `{
  "Id": 78912,
  "Customer": "Jason Sweet",
}`;

xhr.send(data);
}
onclick.getelementById('switch2');{
    let xhr = new XMLHttpRequest();
xhr.open("POST", "https://reqbin.com/echo/post/json");

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => console.log(xhr.responseText);

let data = `{
  "Id": 78912,
  "Customer": "Jason Sweet",
}`;

xhr.send(data);
}