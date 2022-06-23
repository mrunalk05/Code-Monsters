onclick.getelementByClass('updates');{
    let xhr = new XMLHttpRequest();
xhr.open("POST", "https://newslet-server.herokuapp.com/non-ciriculum/clubs");

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => console.log(xhr.responseText);

let data = `{
    {
        "clubname":"acm",
        "msg":"I am mrunal Khade"
    },
}`;

xhr.send(data);
}