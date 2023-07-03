
const cows =15; 

const countCows = new promise (function (resolve, reject) {
if (cows>10) {  resolve (`we have ${cows} cows on the farm`) }
else {reject (`there are not enought cows on teh farm, only there are ${cows}`)}
});

countCows.then ((result) => {console.log (result);
    }).catch ((error) =>{console.log (error);})
    .finally (()=>console.log(`finally`));

    