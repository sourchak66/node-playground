import https from "https"

const forecastUrl = "https://api.weatherbit.io/v2.0/current?lat=45&lon=-75&key=671380814c7548109ac3a5ea6cf30b21&units=I";

const totalRequest = https.request(forecastUrl, (response) =>
{
    let totalData = "";

    response.on("data", (chunk) =>
    {
        totalData += chunk.toString();
    });

    response.on("end", () =>
    {
        const jsonObj = JSON.parse(totalData);
        console.log(jsonObj);
    });
});

totalRequest.on("error", (error) =>
{
    console.log("Error", error);
});

totalRequest.end();