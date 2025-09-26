/* Reduce 
Retoma o valor ( pode ser um novo array , um objeto, string, numero, etc)
aceita 4 paramentros
- acumulador
-valor autual
- index
- array completo
*/
 const list = [ 1, 2, 3, 4, 5, 6, 7];
 
 const sum = list.reduce((acumulador, atual) => {
    return acumulador + atual;
 }, 0);
 console.log(sum)