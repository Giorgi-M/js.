1.

let cars = ["audi","bmw", "lexus", "volkswagen", " porsche"]; 
for (let i = 1; i < 5; i++ ) {
    console.log(cars[i]);
} 

2.

let names = ['levani', 'giorgi' , 'gia' , 'misha'];

for (let i = 0; i < names.length; i++){
    if (names[i].length > 3 ) {
        console.log(names[i]);
    }
}


3.


let numbers = [1 , 2, 3 , 4 , 5 , 6 ];
for (let i=0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0 ) {
        console.log(numbers[i]);
    }
}

let numbers = [1 , 2, 3 , 4 , 5 , 6 ];
for (let i=0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1 ) {
        console.log(numbers[i]);
    }
}

4.
 let user = ['name', 'age', 25, 50, 'surname', [100, 500] ];

console.log(user[5][1]); 

5. 
var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
  };
console.log (person.eyecolor);

6.

let cars = ["audi","bmw", "lexus", "volkswagen", " porsche"]; 
for (let i = 0; i < 5 ; i++) {
    console.log(cars[i]);
} 

7.

let masivi = [5, 25, 89, 120, 36 , ];
masivi.push ('js','python',) ;
masivi.unshift ('html','css',) ;

masivi.shift();
masivi.pop();
console.log(masivi);

8.

let masivi = ['ფორთოხალი', 'ბანანი' , 'ვაშლი' ]
console.log(masivi.length);
masivi.push ('მსხალი', 'ანანასი',)
console.log(masivi);
masivi.unshift('საზამთრო');
console.log(masivi);
console.log(masivi.length);
masivi.splice(2,0, 'მანგო');
console.log(masivi);
masivi.pop();
masivi.shift();
console.log(masivi);
console.log(masivi.length);


9.


let cars = ["audi","bmw", "lexus", "volkswagen", "ferrary", "porsche", "bentley"];
for (let i = 2 ; i < 6; i++ ) {
    
        console.log(cars[i]);
    }

console.log(cars.slice(1,4));



10.

11.

let array = [5, 10, 25, 100, 6, 18];
let numbers = array.map(function(item){
    return item / 2 ;

})
console.log(numbers);







