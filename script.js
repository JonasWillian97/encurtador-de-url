function encurtarURL(){
    let url = document.getElementById("input-url").value;
    if(!url) {
        alert("É preciso inserir uma URL para encurtar!");
        return;
    }
    //api key: a7f47fc94f1e49ce9bded92cd30820bc

    //Encurtar o link

    //Headers
    let headers = {
        "Content-Type": "application/json",
        "apiKey": "a7f47fc94f1e49ce9bded92cd30820bc"
    }
    //Dados
    let linkRequest = {
        destination : url,
        domain : {fullName : "rebrand.ly"}
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        let inputUrl = document.getElementById("input-url")
        inputUrl.value = json.shortUrl;
    })
}