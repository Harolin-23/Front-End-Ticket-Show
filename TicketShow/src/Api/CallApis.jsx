import {DrawsSearch} from './search/styleSearch/Search.jsx'


export async function GetById(id){

    const URL = `http://localhost:8080/api/v1/products/${id}`;

      const response = await fetch(URL);
      const data = await response.json();
      DrawsSearch(data);
  
  }

