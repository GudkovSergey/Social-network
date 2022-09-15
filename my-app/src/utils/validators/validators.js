export const required= value =>{
    if (value) return undefined;
    return  "Field is required";
}

export const  maxLengthCreator = (maxlenght) => (value) =>{
    if(value.length > maxlenght) return `Max length is ${maxlenght} symbols`;
    return undefined;

}