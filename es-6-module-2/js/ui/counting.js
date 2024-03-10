export const createCount=(text,count) => {
    const p=document.createElement("p");
    p.innerHTML=`${text} : <span id="counter">${count}</span> `
    return p;
}