
const Url = 'http://localhost:8080/api/v1/'


export async function GetById(){

    const URLSearchId = `products/${id}`;

      const response = await fetch(Url + URLSearchId);
      const data = await response.json();
      return data;
  
  }


  export async function GetTitule(){
    let bLocal = localStorage.getItem("search");

    const urlNameSearch = `http://localhost:8080/api/v1/events/search/?title=${bLocal}&page=1&size=10`;

    const response = await fetch(urlNameSearch);
    const data = await response.json();

    return data.content;
  }



