const cart =[
 {productName: 'Abóbora', pricePerkg: 5, kg: 1}, //5 
 { productName: 'Pepino', pricePerkg: 3.55, kg: 1.3},//4.615
 {productName: 'Limão', pricePerkg: 1.2, kg: 2}, // 2.4
 {productName: 'Abacate', pricePerkg: 5.4, kg: 1.67},//9.018
 {productName: 'Morango', pricePerkg: 11.9, kg: 3},//35,7
]
const finalValue = cart.reduce((acc, value) =>{
    const result = value.pricePerkg* value.kg;
    return acc + result

},0);
console.log( `a sua compra ficou no valor total de: ${finalValue.toLocaleString('pt-BR',{
   style:'currency',
   currency: 'BRL'
})}`)