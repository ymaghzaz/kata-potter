console.log("It works!");

const bookPrice = 8;
const reduc = [0, 0.05, 0.1, 0.2, 0.25];

export var pricePredict = (basket)=>{
    let totalPrice = 0;
    let booksNumber = {};
    basket.map(element  => {
       booksNumber[element] =(booksNumber[element] ) ? booksNumber[element] + 1 :1;
    });
    let booksKeys = 0;
    for ( var key in booksNumber){
        booksKeys ++;
    }
    if(booksKeys != 1){
        totalPrice  = (bookPrice*booksKeys) - (bookPrice*booksKeys)*reduc[booksKeys - 1];
        totalPrice = ( basket.length  - booksKeys )*bookPrice + totalPrice
    }else{
        totalPrice =  basket.length*bookPrice  
    }
  
    return totalPrice;
}

