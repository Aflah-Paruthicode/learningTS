
// let name: string = "bruce wayne";
// let age: number = 35;

// let place: string = "us";


// console.log(name,age,place)

// interface UserInterface {
//     favYt : string,
//     why : string,
//     createdby : number
// };

// let User:UserInterface = {
//     favYt : 'aflu tech',
//     why : 'felt funny + creative',
//     createdby : 2019
// }

// console.log(User)


// function greetings (greetMsg : string) : string {
//     return 'heey ' + greetMsg;
// }

// console.log(greetings('aflah'))



// type IdFieldTypes = string | number;
//  const gettingParameter = (id : IdFieldTypes) :string | number => {

//     return id
//  }


//  console.log(gettingParameter('haai'))
//   console.log(gettingParameter(122))

interface UserInterface {
    name : string,
    age : number,
    readonly joinedOn : Date,
};

const user : UserInterface = {
    name : 'steave',
    age : 26,
    joinedOn : new Date()
}

    // user.joinedOn = new Date();  not gonna work !


console.log(user);
