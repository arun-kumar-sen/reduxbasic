
export const inc = (num)=>{
    return {
        type:"Increment",
        payload: num,
    }
}

export const dec = ()=>{
    return {
        type:"Decrement"
    }
}