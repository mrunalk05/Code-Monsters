function fetchdata(){
    fetch("https://reqres.in/api/users?sort=desc")
    .then(response => {
        console.log(response)
        if(!response.ok){
            throw Error("Error");
        }
       return response.json();
    //    console.log(data);  
    })
    .then(data => {
        console.log(data.data);
        const html =data.data.map(user =>{
            return `<p>Name: ${user.first_name + " "+ user.last_name}</p>`
        }).join("");
        console.log(html);
        document.querySelector("#UPDATES")
        .insertAdjacentHTML('afterbegin',html);
    }).catch(erroe =>{
            console.log(error);
        });
}
fetchdata();