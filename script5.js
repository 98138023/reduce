const cart =[
 {productName: 'Iphone', price: 5000, quantidade: 1}, 
 { productName: 'Xaomi', price: 1200, quantidade: 1},
 {productName: 'Sansumg', price: 3500, quantidade: 2}, 
 
]
const finalValue = cart.reduce((acc, value) => {
    const result = value.price * value.quantidade;
    return acc + result;
}, 0);
console.log( `a sua compra ficou no valor total de: ${finalValue.toLocaleString('pt-BR',{
   style:'currency',
   currency: 'BRL'
})}`)