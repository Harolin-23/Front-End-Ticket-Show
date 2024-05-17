
export function errorParam(error){
    const err = error;
    //console.log(err)
    localStorage.setItem('error', JSON.stringify(err));
    
}