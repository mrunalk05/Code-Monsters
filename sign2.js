onclick.getelementByclass('timetable');{
    let xhr = new XMLHttpRequest();
xhr.open("POST", "https://newslet-server.herokuapp.com/ciriculum/timetable");

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => console.log(xhr.responseText);

let data = `{
    {
        "branch": "cse",
        "year":"sy",
        "day":"mon",
        "userId":"1",
        "oldslots":{
             "slot1": "os",
                  "slot2": "cn",
                  "slot3": "dbms",
                  "slot4": "",
                  "slot5": "os",
                  "slot6": "flat"
        },
        "newslot":{
             "slot1": "pnr",
                  "slot2": "db",
                  "slot3": "dbms",
                  "slot4": "",
                  "slot5": "os",
                  "slot6": "flat"
        }
        
        }
}`;

xhr.send(data);
}