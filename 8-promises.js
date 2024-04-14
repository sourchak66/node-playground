// const doWorkPromise = new Promise((resolve, reject) =>
// {
//     setTimeout(() =>
//     {
//         resolve([ 1, 4, 7 ]);
        
//         // reject ("Things went wrong!!");
        
//     }, 2000);
// });

// doWorkPromise.then((result) =>
// {
//     console.log("Success!!", result);
// })
// .catch((error) =>
// {
//     console.log("Error!!", error);
// });


const add = (a, b) =>
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            resolve(a + b);
        }, 0);
    });
}

// add(1, 2)
// .then((sum) =>
// {
//     console.log(sum);
    
//     add(sum, 5)
//     .then((sum2) =>
//     {
//         console.log(sum2);
//     })
//     .catch((error2) =>
//     {
//         console.log(error2);
//     });
// })
// .catch((error) =>
// {
//     console.log(error);
// });

add(1, 1)
.then((sum) =>
{
    console.log(sum);
    return add(sum, 4);
})
.then((sum2) =>
{
    console.log(sum2);
})
.catch((error) =>
{
    console.log(error);
});