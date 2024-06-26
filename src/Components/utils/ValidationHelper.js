export  function EmailValidator(value,logincheck) {

    // return /^\w([\.-]?\w)*@\w([\.-]?\w)*(\.\w{2,3})+$/.test(value)
    // return /^[a-zA-Z0-9]+@(gmail|yahoo)\.(com|in)$/.test(value)
    // if(/^[a-zA-Z0-9]+@(gmail|yahoo|live|hotmail|msn|outlook|icloud|gmx|mail|aol)\.(com|in|io|co\.uk|net)$/.test(value)){
    //     return true
    // }
    if(logincheck=="login"){
     if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)){
        return true
    }
           
        else 
            return false;

    }
    else{
        if(/^[a-zA-Z0-9_.+-]+@(?!gmail|yahoo|live|hotmail|msn|outlook|icloud|gmx|mail|aol)([a-z]+)\.(com|in|io|co\.uk|net)$/.test(value)){
            return true
        }
           
        else 
            return false;
    }

    
    
    
//     if (/^\w([\.-]?\w)*@\w([\.-]?\w)*(\.\w{2,3})+$/.test(value))
//     return true
//   else return false
}

export function NumberOnlyValidator  (value) {

    return /^\d*(?:[.,]\d{1,2})?$/.test(value)
    // if ( /^\d*(?:[.,]\d{1,2})?$/.test(value))
    //     return true
    // else
    //     return false
}


const upperPresent = (value) => {
    if (/^(?=.*[A-Z]).+$/.test(value))
        return true
    else
        return false;
}

const lowerPresent = (value) => {
    if (/^(?=.*[a-z]).+$/.test(value))
        return true
    else
        return false;
}

const numPresent = (value) => {
    if (/\d/.test(value))
        return true
    else
        return false;
}

const specialPresent = (value) => {
    if (/([!@#$%^&*(),.?":{}|<>])/.test(value))
        return true
    else
        return false;
}
export { upperPresent, lowerPresent, numPresent, specialPresent}