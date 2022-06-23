function fetchdata(){
    fetch("https://wcenewslet.herokuapp.com/non-ciriculum/clubs")
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
            return `<p>Name: ${user.clubname + " "+ user.msg}</p>`
        }).join("");
        console.log(html);
        document.querySelector("#UPDATES")
        .insertAdjacentHTML('afterbegin',html);
    }).catch(error =>{
            console.log(error);
        });
}
fetchdata();