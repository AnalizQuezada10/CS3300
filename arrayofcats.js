let cats = [
    {name: 'Whiskers' , status:'Available'},
    {name: 'Fluffy' , status: 'Unavailable'},
    {name: 'Tom' , status: 'Available'},

]; 

let adoptedCats = cats.filter(cat => cat.status === 'Available').map(cat => cat.name);
let sentence = `You've adopted the following cats: ${adoptedCats.join(',')}`;

console.log(sentence); 
let value =(Math.random() * 10 > 5) ? "Greater than 5!" : "Less than 5!"
console.log(value);
cats.forEach(cats => {
    for(let key in cats) {
        console.log(`${key}: ${cats[key]}`);

    }

});

let number =1;
let str = '1';


if(number == str) {
    console.log('Integer 1 and string "1" are equal with ==. ');  
}
if(number !== str) {
    console.log('Integer 1 and String "1" are not equal with !==');
    }


    let cuteCat = cats.map(cat => `${cat.name} is very cute !`);
    console.log(cuteCat);
