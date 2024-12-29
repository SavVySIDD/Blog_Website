setTimeout(()=>{
    console.log('I am Pregnant');
    clearInterval(int);
},4000)

const int = setInterval(() => {
    console.log('Fuck ME')
}, 1000);

console.log(__filename)
console.log(__dirname)