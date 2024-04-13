setTimeout(() =>
{
    console.log("Two seconds are up!!");
}, 2000);

const names = ["Sourav", "Mihir", "Chandana"];

const shortNames = names.filter((name) =>
{
    return (name.length < 6);
});

const geocode = (address, callback) =>
{
    setTimeout(() =>
    {
        const data = {
            latitude : 0,
            logitude : 0,
        };

        callback(data);

    }, 2000);
}

geocode("Phidelphia", (data) =>
{
    console.log(data);
});


const add = (e1, e2, callback) =>
{
    setTimeout(() =>
    {
        const sum = (e1 + e2);

        callback(sum);

    }, 2000);
};

add(1, 4, (sum) =>
{
    console.log(sum);
});