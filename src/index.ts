console.log("It works!");

const bookPrice = 8;
const reduc = [0, 0.05, 0.1, 0.2, 0.25];

export var pricePredict = (basket)=>{
    let totalPrice = 0;
    let booksNumber = {};
 
    basket.forEach((element ,index)=> {
       booksNumber[element] =(booksNumber[element] ) ? booksNumber[element] + 1 :1;
        totalPrice += bookPrice;
    });
    let booksKeys = 0;
    for ( var key in booksNumber){
        booksKeys ++;
    }
    if(booksKeys != 1){
        totalPrice  = totalPrice - totalPrice*reduc[booksKeys - 1];
    }
    return totalPrice;
}

