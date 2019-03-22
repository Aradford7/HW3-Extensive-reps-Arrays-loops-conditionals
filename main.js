console.log('JS is Running Running Running....uhh')

//EASY GOING
//1. Write a loop that will log the numbers1 through 20.

/*for(let i=1; i<=20; i++){
    console.log('The number is' + i);}
"Commit 1 - Easy Going answered"*/

//GET EVEN
//1. Write a for loop that will log only the even numbers 
//in 0 through 200.

/*for(i = 0; i < 200; i++){
    if ((i % 2) == 0){
        console.log('This number is' + i)
    }
} */
//"Commit 2 - Get Even answered"

//EXCITED KITTEN
//1.Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
//2.For every even number in your loop, log "...human...why 
//you taking pictures of me?...", "...the catnip made me do it...",
// or "...why does the red dot always get away..." at random.

//Hint: You will need to use Math.random()

//for (let i = 0; i < 20; i++){
    //console.log('Love me, pet me! HSSSSSS!')}

/*const salem = ["...human...why you taking pictures of me?...",
"...the catnip made me do it...", "...why does the red dot always get away..."];

function meow(){
    let salem = [i];
    for (let i = 0; i < 20; i++){
        console.log('Love me, pet me! HSSSSSS!');
        if ((i % 2 ==0)){
            Math.Random(salem+ i);{
            console.log(meow)}
        }
     }
}*/

//FIZZ BUZZ
//1.Write a javascript application that logs all numbers from 1-100.
/*for(let i=0; i <=100; i++){
    console.log('The number is:' + i);}*/

//2.If divisible by 3 log "Fizz" instead of number
/*for(let i=0; i <=100; i++){
    if(i % 3 === 0){
        console.log("Fizz");
    }
}*/
//3.If divisible by 5 log "Buzz" instead of number

/*for(let i=0; i <=100; i++){
    if(i % 5 ===0){
        console.log("Buzz");
    }
}*/

//4.If a number is divisible by 3 and 5 log "FizzBuzz" instead of number.

/*for(let i=0; i <=100; i++){
    if(i % 3 === 0 && i % 5 ===0){
        console.log("FizzBuzz");
    }
    else if(i % 3 ===0){
        console.log("Fizz");
    }
    else if(i % 5 ===0){
        console.log("Buzz");
    }   else{
        console.log(i)
    }
}*/

//GETTING TO KNOW YOU
/*const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];*/

//1.Jim Clark decides that Kenny can't be named "Kenny" anymore.
//Remove "Kenny" from the kenny array and repace it with "Gameboy"

/*kenny[0] = ["Gameboy"];
    console.log(kenny[0]);*/

/*kenny.splice(0,1,"Gameboy");
    console.log(kenny)*/

//2.Jim Clark had his birthday; change jimClark's array to reflect
//him being a year older. W/O knowing age add an year

/*var JimAge= jimClark[1];
  var NewJimAge= JimAge+1;
    jimClark.splice(1,1,NewJimAge);
    console.log(jimClark)*/

//3.Ryan is Batman or Robin. Change Ryan's hometown from Denver
//to "Gotham City"

/*ryan[0,2] = ["Gotham City"];
    console.log(ryan[0,2]);*/
/*ryan.pop();
    console.log(ryan);
ryan.push("Gotham City");
    console.log(ryan);*/

//4.Reuben left Durham 5 years ago to come to Chicago. First,
//remove"Durham" from Reuben's array, and then add "Chicago".

/*reuben.pop();
    console.log(reuben);
 reuben.push("Chicago");
     console.log(reuben);*/

//5.Jim Haff could be literally anywhere in the wolrd. Remove
//"All cities" from his array, then pick 3 cities you like and add 
//them to Jim's array.

//jimHaff.pop();
//jimHaff.push("Fantasyland","Wonderland","Neverland");
//console.log(jimHaff);

//6.Bonus.Jim Haff is actually only allowed to be in one of the two
//cities. first city is jim remove it from the array using .splice()
/*var NewCity= jimHaff[1];
var removed = [2];
    jimHaff.splice(2,2, NewCity);
console.log(jimHaff);*/

//YELL AT THE NINJA TURTLES
//1.Create an array with the memeber of the ninja turtles
//ninja = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

//2.Use a for loop to call .toUpperCase() on each of them and print
//out the results.

/*var arrToUp = String.prototype.toUpperCase.apply(ninja).split(",");
    console.log(arrToUp)*/

/*for(var i = 0; i < arr.length; i++){
    ninja[i] = ninja[i].toUpperCase();
    console.log(ninja);
}*/

/*let ninja = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
function changeUp(){
    for(i=0;i<ninja.length;i++){
   ninja[i]=ninja[i].toUpperCase();
    }
    console.log(ninja)
}
console.log(changeUp(ninja))*/
//3.Bonus: Modify the answer to lowercase.

/*var arrToDown = String.prototype.toLowerCase.apply(arr).split(",");
    console.log(arrToDown)*/

/*let ninja = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
    function changeUp(){
        for(i=0;i<ninja.length;i++){
       ninja[i]=ninja[i].toLowerCase();
        }
        console.log(ninja)
    }
    console.log(changeUp(ninja))*/

//RETURN OF THE CLOSETS

//Use data of the code and answer the questions.
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//1.Alien Attire - Kristyn's left shoe has traveled through time
//and space and turned up in Thom's accessory drawer! Remove Kristyn's
//shoe from the array and save it to the variable kristynsShoe Use that 
//variable to add Kristn's lost shoe to Thom's accessories array.

//declare array, remove from array, 
var kristynsShoe = kristynsCloset.splice(0,1);
console.log(kristynsCloset);
console.log(kristynsShoe) ; 
placing the shoe in thoms closet
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset[2]);

//2.Dress'em Up - Modify your code to put together 3 separate outfits 
//for Kristyn and Thom. Put the output in a sentence to tells us what
//we'll be wearing. Mix and match!

//3. Dirty Laundry - Time to do laundry - loop through Kristyn's 
//closet and log the sentence "WHIRR: Now washing (item)" for each
//item in the array.

//4. Inventory - Thom wants to do inventory on his closet. Using
//bracket notation, log the arrays containing all of Thom's shirts,
//pants, and accessories

//MULTIPLES OF 3 and 5
//List all natural numbers below 10 that are multiple of 3 or 5,
//we get 3,5,6,and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

/*function isDiv(num, divisible){
    return num % divisible == 0;
}
var problem=[];
problem[1] = function () {
    var sum = 0;
    for (var i = 0; i < 1000; i++){
        if(isDiv(i, 3) || isDiv(i,5)){

        }
    }
    return sum;
};
//ANSWER 233168*/




