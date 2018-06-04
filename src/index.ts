console.log("It works!");

const bookPrice = 8;
const reduc = [0, 0.05, 0.1, 0.2, 0.25];

export var pricePredict = (basket)=>{
    let totalPrice = 0;
    let booksStack = {};
    basket.map(element  => {
       booksStack[element] =(booksStack[element] ) ? booksStack[element] + 1 : 1;
    });
    let price = priced( booksStack , totalPrice, basket.length ,0);
    return  price;
}


var priced = ( booksBasket , totalPrice , totalBooks ,totalbooksBasketPriced) =>{
    let booksBasketPriced = 0;
    for ( var key in booksBasket){
        if(booksBasket[key] !== 0 ){
            booksBasketPriced++;
            booksBasket[key]  = booksBasket[key]-1;
        } 
    }
    totalPrice = totalPrice + ( booksBasketPriced*bookPrice - booksBasketPriced*bookPrice*reduc[booksBasketPriced - 1]) 
    totalbooksBasketPriced  = totalbooksBasketPriced+booksBasketPriced;
    if(totalBooks === totalbooksBasketPriced ){
        return totalPrice;
    }else{
        return priced(booksBasket , totalPrice, totalBooks ,totalbooksBasketPriced);
    }
}