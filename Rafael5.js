const companies = [
    { name: 'samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foudedon: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foudedon: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foudedon: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foudedon: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foudedon: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foudedon: 1976 },
];
// subtrair 10% de valor de mercado a todas as companhias
// filtar somente companhias fundadas depois de 1980
//somar o valor de mercado das restantes
const newCompany = companies.map((companies)=>{
    companies.marketValue = companies.marketValue -companies.marketValue/10
    return companies
}).filter((companies)=>{
    return companies.foudedon> 1980
}).reduce((acc,companies)=>{
    return acc + companies.marketValue
},0)
console.log(newCompany) //realizado com sucesso!