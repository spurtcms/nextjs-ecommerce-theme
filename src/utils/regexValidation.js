const EmailValidator = (value) => {
    if (/^\w([\\.-]?\w)*@\w([\\.-]?\w)*(\.\w{2,3})+$/.test(value))
        return true
    else
        return false;
}


const NumberValidator = (value) => {
    if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\\./0-9]*$/.test(value)) {
        return true
    } else {
        return false
    }
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

export { upperPresent, lowerPresent, numPresent, specialPresent,EmailValidator, NumberValidator  }

export const quantityList = () => {
     return[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
}

export const TaxPriceValidation=(specialPrice,discountPrice,productPrice,tax,strike)=>{
    console.log(specialPrice,discountPrice,productPrice,tax,strike,'89787877')
       if(strike==="strike"){
        if(discountPrice){
            return discountPrice+tax
        }
       }
       else{

        if(specialPrice){
            return specialPrice+tax
        }else{
            let a=parseInt(productPrice)+parseInt(tax)  

            return a
        }
       }
}