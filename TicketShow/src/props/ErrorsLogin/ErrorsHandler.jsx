
export function errorParam(error){
    const err = error;
    localStorage.setItem('error', JSON.stringify(err));
    
}