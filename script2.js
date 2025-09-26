const company = [
{name: 'Samsung', marketValue: 50, CEO: 'Kin Hyn Suk', foundedon: 1938},
{
    name: 'Microsoft',
    marketValue: 415,
    CEO: 'Satya Nadella',
    foundedon: 1975,
},
 { neme: 'Intel', marketValue: 177, CEO: 'Brian Krzanick', foundedon: 1968},

 {
    name: 'Facebook',
    marketValue: 383,
    CEO: 'Mark Zuckerberg',
    foundedon: 2004,
 },
{name: 'Spotify', marketValue: 30, CEO: 'Daniel EK', foundedon: 2006 },
{name: 'Apple', marketValue: 845, CEO: 'Tim cook', foundedon: 1976 },
]
const marketValue = company.reduce((acumulador, valoratual)=>{
     return acumulador + valoratual.marketValue;
    
},0)
console.log(marketValue)