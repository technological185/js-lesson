const ironhacker = {
    firstName: 'marko',
    age: 39,
    favoriteLanguage: 'JavaScript',
    isSatisfied: true,
    'works at': 'Google',
    isRemote: false
}

// 1: update favoriteLanguage to 'React' 
// ... your code here
ironhacker.favoriteLanguage = 'React';

// 2: Update ironhacker's age to 29
// .. your code here
ironhacker.age = 29;

// 3: Remove the 'isRemote' property
// ... your code here
delete ironhacker.isRemote;
// 4: Add a new property: 'didGraduate' and set it to a valid boolean value
// ... your code here
ironhacker.didGraduate = true;

// 5: list all keys of the ironhacker object
// ... your code here
let a = Object.keys(ironhacker);
console.log(a);

// 6: check if ironhacker has property 'works at'
// ... your code here
for (let b of a){
    if(b === 'works at'){
        console.log(true);
    }
}

console.log(ironhacker["works at"])
