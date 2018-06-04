import { pricePredict } from './index';

describe("Basic jest test", () => {
    test("should return 16 when we purshes tow same books" ,()=>{
        let basket = [1,1];
        expect(pricePredict(basket)).toBe(16);
    })

    test("should return 24 when we purshes tow same books" ,()=>{
        let basket = [1,1,1];
        expect(pricePredict(basket)).toBe(24);
    })

    test("should apply 5% discount if two differents books are bought", () => {
        let basket = [1,2];
        expect(pricePredict(basket)).toBe(15.2);
    })

    test("should apply 10% discount if tree differents books are bought", () => {
        let basket = [1,2,3];
        expect(pricePredict(basket)).toBe(21.6);
    })

    test("should apply discount if differents books are bought", () => {
        let basket = [1,1,2,2,3,3,4,5];
        expect(pricePredict(basket)).toBe(51.2);
    })

});
