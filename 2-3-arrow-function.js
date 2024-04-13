// normal function
// const square = function (x)
// {
//     return (x * x);
// }

// arrow function
// const square1 = (x) =>
// {
//     return (x * x);
// }

// arrow function shorthand
// const square2 = (x) => (x * x);

// console.log("Normal Function Answer : " + square(3));
// console.log("Arrow Function Answer : " + square1(3));
// console.log("Shorthand Arrow Function Answer : " + square2(3));


// const event = {
//     name : "Birthday Party",
//     guestList : ["Sourav", "Mihir", "Chandana"],
//     printGuestList : function ()
//     {
//         console.log("Guest List for " + this.name);

//         this.guestList.forEach((guest) =>
//         {
//             console.log(guest + " is Attending " + this.name);
//         });
//     }
// }

// event.printGuestList();


// Arrow function don't bind their own this value. They access the this value in the context in which they are created which in this case are write inside of printGuestList attribute of event object.

// Arrow function are bad for functions which are written within an object or likes where are we using this to access the different attributes of the same object. If the this is previously defined then only we can use arrow function.


const tasks = {
    tasks : [
        {
            tasks : "Grocery Shopping",
            completed : true
        },
        {
            tasks : "Clean Yard",
            completed : false
        },
        {
            tasks : "Film Course",
            completed : false
        }
    ],
    getTasksToDo()
    {
        const incompleteTasks = this.tasks.filter((eachTask) =>
        {
            return (eachTask.completed === false);
        });

        incompleteTasks.forEach((eachTask) =>
        {
            console.log(eachTask.tasks + " is incomplete");
        });

        return incompleteTasks;
    }
}

tasks.getTasksToDo();
console.log(tasks.getTasksToDo());