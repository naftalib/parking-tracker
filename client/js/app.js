const entries = [
  {
      "in":1648587660907,
  "out":1648600477532,
  "license":"N642R8"
},
  {
    "in":1648587720907,
    "out":1648622697129,
    "license":"94YE74"
  },
  {
    "in":1648587720907,
    "out":1648657938211,
    "license":"W2BS2N"
  },
  {
    "in":1648587780907,
    "out":1648604220677,
    "license":"M4TM7F"
  },
  {"in":1648587780907,"out":1648610590195,"license":"6H31R7"},
    {"in":1648587840907,"out":1648665752295,"license":"3897R5"},
    {"in":1648587900907,"out":1648610162289,"license":"9K69VN"},
    {"in":1648587960907,"out":1648606228707,"license":"PS1FNF"},
    {"in":1648587960907,"out":1648644498052,"license":"6VEIDP"},
    {"in":1648588020907,"out":1648599622784,"license":"6LLC1H"},
    {"in":1648588080907,"out":1648639562630,"license":"PF42ZT"},
    {"in":1648588080907,"out":1648603520334,"license":"AD6LAX"},
    {"in":1648588200907,"out":1648654333282,"license":"KMYZDV"},
    {"in":1648588260907,"out":1648636369515,"license":"KSWZY4"},
    {"in":1648588260907,"out":1648625477803,"license":"JVCQHU"},
    {"in":1648588320907,"out":1648660737629,"license":"QGHAVN"},
    {"in":1648588500907,"out":1648664391909,"license":"QAICR4"},
    {"in":1648588560907,"out":1648671897050,"license":"KMFSQT"},
    {"in":1648588620907,"out":1648608611547,"license":"XSANY9"},
    {"in":1648588740907,"out":1648669745587,"license":"W6BWMR"},
    {"in":1648588740907,"out":1648652785277,"license":"WTHMAI"},
    {"in":1648588860907,"out":1648600504093,"license":"ITEBAI"},
    {"in":1648588860907,"out":1648673110967,"license":"97EJ2R"},
    {"in":1648588980907,"out":1648614305991,"license":"52GOBK"},
    {"in":1648589040907,"out":1648661665164,"license":"QHDXCL"},
    {"in":1648589100907,"out":1648655544160,"license":"OLUPP8"},
    {"in":1648589100907,"out":1648665141569,"license":"60MUS3"},
    {"in":1648589160907,"out":1648609664648,"license":"DQNE5V"},
    {"in":1648589160907,"out":1648673338281,"license":"66V30T"},
    {"in":1648589220907,"out":1648620887330,"license":"EIQTQ1"},
    {"in":1648589460907,"out":1648601372178,"license":"YOF4FG"},
    {"in":1648589460907,"out":1648593280250,"license":"EKT66Q"},
    {"in":1648589520907,"out":1648633272238,"license":"FK7Y34"},
    {"in":1648589520907,"out":1648666649674,"license":"FL7HHM"},
    {"in":1648589580907,"out":1648630056500,"license":"JWE573"},
    {"in":1648589640907,"out":1648591738977,"license":"E7J0RM"},
    {"in":1648589640907,"out":1648619029713,"license":"FB2H4H"},
    {"in":1648589700907,"out":1648616419315,"license":"34KLKX"},
    {"in":1648589760907,"out":1648671081298,"license":"TWEY11"},
    {"in":1648589760907,"out":1648634037281,"license":"3FSMVD"},
    {"in":1648589820907,"out":1648611817646,"license":"2WVYFM"},
    {"in":1648589820907,"out":1648645706784,"license":"93QW9D"}

]

console.log("Full entry:", entries)

// mapping over JSON data to manipulate data and create a formatted array saved to a var called entryData.

const entryData = entries.map(entry => {

// Using the DATE() method to configure correct date/time in/out display

  const In = new Date(entry.in)
  const Out = new Date(entry.out)
  const timeIn = `
    ${In.toLocaleDateString()} 
    ${In.toLocaleTimeString("en-us", {timeStyle: "medium"})}
    `
  const timeOut = `
    ${Out.toLocaleDateString()} 
    ${Out.toLocaleTimeString("en-us", {timeStyle: "medium"})}
    `
// Duration spent in parking

  entry.rawDuration = entry.out-entry.in
  entry.duration = Math.round(
    (entry.rawDuration / 1000 / 60 / 60) * 100) / 100
    
// Fee for duration

  let price = entry.price = entry.duration <= 1 ? "free": 
    Math.ceil(entry.duration * 2.99 * 100) / 100

//returning the array values within table elements concatted to populate the tbody element in HTML doc.
  return (
    
    `<tr>
    <td>${entry.license}</td>
    <td id="price">$ ${entry.price}</td>
    <td>${entry.duration}</td>
    <td>${timeIn}</td>
    <td>${timeOut}</td>
</tr>`
  )   
}).join('')

const tabelBody = document.querySelector("#tableBody")
tableBody.innerHTML = entryData;

function priceColor (){

  if(document.getElementById("price").innerText === "free"){
    document.getElementById("price").childNodes.style.color = "blue"
  }else{
    document.getElementById("price").childNodes.style.color = "red"
  }

}


priceColor()
  // if (price === "free"){
  // priceColor.style.color = "blue"
  // }else if (duration < 24){
  // priceColor.style.color = "red"
  // }




//api call
  
//   fetch('http://localhost:4200/api/event/')
//   .then(res => res.json())
//   .then(entries => {


// })

// NOTES: STILL UNSOLVED:
// 1. Return color-coded entries for ("free" = blue and over 24h = blue) 
// 2. Date format need adjustment to show am/pm and not time zone

                              