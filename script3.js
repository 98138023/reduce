/* resolvedo exercicio*/
const cart =[
 {productName: 'Abóbora', pricePerkg: 5, kg: 1}, //5 
 { productName: 'Pepino', pricePerkg: 3.55, kg: 1.3},//4.615
 {productName: 'Limão', pricePerkg: 1.2, kg: 2}, // 2.4
 {producName: 'Abacate', pricePerkg: 5.4, kg: 1.67},//9.018
 {producName: 'Morango', pricePerkg: 11.9, kg: 3},//35,7
]
const valor = cart.reduce((acumulador, item) => {
    return acumulador + (item.pricePerkg*item.kg)

}, 0);
console.log( `sua compra ficou no total de: ${valor.toLocaleString('pt-BR',{
    style:'currency',
    currency:'BRL'
})}`) /* feito com sucesso!*/