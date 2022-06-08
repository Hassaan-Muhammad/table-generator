function table(){
    let tableinput= document.querySelector("#tableinput").value;
    let multipleinput= document.querySelector("#multipleinput").value;
    TR.innerHTML = ``

    for(let i=0 ;i< multipleinput; i++){
        let TR= document.querySelector("#TR");
        TR.innerHTML += `${tableinput} X ${i +1} = ${tableinput*(i+1)} <br> `
    }
}