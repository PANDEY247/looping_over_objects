// const user ={
//     name: "don",
//     age : 25,
//     occupation:"web devloper"
// };
// console.log(Object.entries(user));

// console.log(Object.values(user));

// console.log(Object.keys(user));

const user ={
         name: "don",
         age : 25,
         occupation:"web devloper"
     };
for (const key of Object.keys(user)) {
    console.log(`${key}=>${user[key]}`);
    
}
