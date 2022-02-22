// always prompt-sync so the terminal can read the new main.js file.
const prompt = require('prompt-sync')();

// these are the first few lines that will be shown to the user letting user know what is going on
console.log(" ")
console.log(" Welcome to the To-Do List Manager Application! ")
console.log(" ")
console.log(" =============================================== ")
console.log(" ")
console.log(" Your To-Do-List is Currently Empty! ")
console.log(" ")

// this creates memory for the entire spread (one for ea )
let input
let complete = [ ]
let toDoList = [ ]

// this is creating a loop to ask the user what they want to do. 
while (input !== 3){ 

    // prompt user to choose an action and lists the items
    console.log(" ")
    console.log(" ~ Select An Action: ~ ")
    console.log(" ")
    console.log(" [1] Create A To-Do Item ")
    console.log(" [2] Complete A To-Do Item ")
    console.log(" [3] Exit The Program ")

    // this is just allowing the user to input their answer on another line with ">" pointing to it
    input = Number(prompt(" > "))
    console.log(" ")
    console.log(" =============================================== ")

    console.log(" ")
        if (input === 1){

            // prompt user to create item
            console.log(" ~ Create A New To-Do Item: ~ ")
            console.log(" ")
            let toDo = (prompt(" Enter The New To-Do Item : "))
            console.log(" ")
            console.log(" =============================================== ")
            console.log(" ")

            // this pushes ea item created by user to a combined list
            toDoList.push(toDo)

            // this marks each task as incomplete until marked complete by user (which is broken down below)
            complete.push(" [Incomplete] ")
            console.log(" You Currently Have " + toDoList.length + " To-Do Item(s). ")

        for (let i = 0; i < toDoList.length; i++){
            
            // prints each array as a string
            console.log(` ${i + 1} ${complete[i]} ${toDoList[i]} `)}
        
        } else if (input === 2){

            // write out what you want the user to see when they press 2.
            console.log(" Complete A To-Do Item: ")
            console.log(" ")
            let compeleted = (prompt(" What Items Would You Like To Complete? "))

            // minus one because index starts at 0 but the user will start select numbers starting with 1
            complete[compeleted - 1] = (" [Completed] ")
            console.log(" ")
            console.log(" =============================================== ")
            console.log(" ")

            // print the amount of to do items entered.
            console.log(" You Currently Have " + toDoList.length + " To-Do Item(s). ");

            for (let i = 0; i < toDoList.length; i++){
            console.log(` ${i + 1} ${complete[i]} ${toDoList[i]} `)}
        }

    }