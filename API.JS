let student  = {
    name:"Shivam",
    class: 10
};

//JSON is not simile to js objects
// Initially it was written in XML (Extensible Markup Language)format
// 90% websites or their api's is written in JSON format whilerest of people do till use xml format
//XML is customizable wheras JSON is not so.
// format is different XML is title bit Simile to HTML elements wereas json is litbit Simile to Js objects.
// JSON is basically validate through Json Validators like "https://json lint.com/"

let json = `{"fact":"The most expensive cat was an Asian Leopard cat (ALC).Domestic Shorthair (DSH) hybrid named zeus.zeus who is 90% ALC and 10% DSH has an asking price of 310,000 ($154,000).","length":175}`

// Conversion of JSON in to Js object

let validRes = JSON.parse(JsonRes);
console.log(validRes.fast);
console.log(validRes.length);

let obj = {
    Name: "Satish",
    reviewl:"like to get it !!"

};

// Conversion of js objects into  json format.

let Validobj = json.Stringify (obj);
console.log (Validobj);