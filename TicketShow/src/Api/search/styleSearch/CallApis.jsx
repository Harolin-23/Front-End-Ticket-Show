
const Url = 'http://localhost:8080/api/v1/'


export async function GetById(){

    const URLSearchId = `products/${id}`;

      const response = await fetch(Url + URLSearchId);
      const data = await response.json();
      return data;
  
  }


  export async function GetTitule(){
    let bLocal = localStorage.getItem("search");

    const urlNameSearch = `events/auth/search?title=${bLocal}&page=1&size=100`;

    const response = await fetch( Url + urlNameSearch);
    const data = await response.json();

    return data.content;
  }



  export async function GetCategorie(page){

    let urlNameSearch;

      urlNameSearch = `events/auth/search?page=${page}&size=6` 
      const response = await fetch( Url + urlNameSearch);
      const data = await response.json();
  
      return data.content; 
    }


  


  export async function GetCategorieOther(page){

    let urlNameSearch;

    const value = localStorage.getItem("categories")

    urlNameSearch = `events/auth/search?category=${value}&page=1&size=6`

    const response = await fetch( Url + urlNameSearch);
    const data = await response.json();

    return data.content;

  }







