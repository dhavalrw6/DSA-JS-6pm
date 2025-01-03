let count = 1;
let helloPrint = () => {
    console.log("Hello world!!");
    if(count == 5){
        clearInterval(id);
    }
    count++;
}


 let id = setInterval(helloPrint,2000);