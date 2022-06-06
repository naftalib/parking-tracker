//api call

  fetch('http://localhost:4200/api/event/')
  .then(res => res.json())
  .then(entries => {
  
// ----------------------TABLE display logic------------------------------------

// 1. Taking JSON obj to create a formatted array saved to a var called 'entryData'.

const entryData = entries.map(entry => {

  // Using DATE() method to configure correct date/time in/out display of time stamps.
  
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
  // Total parking duration calculation

  let entryTime = Math.abs(entry.in-entry.out) / 36e5;
  const duration = entryTime.toFixed(1)

  // Fee for respective duration
  
  // the "price" variable returns either "free" for entries less than 1h
  //or the $ price p/h using the ternary operator
  
    const price = duration <= 1 ? "FREE": 
     Math.ceil(duration * 2.99 * 100) / 100

  // the priceTD variable returns the correctly foramtted td element according to "free"/1-24h and over 24h
    
    const priceTD = price === "FREE" ? `<td id="td-price-free">${price}</td>` : 
    duration >= 23.9 ? `<td id="td-price-24h">$ ${price}</td>` : 
    `<td>$ ${price}</td>`
  
  //returning the HTML <tr> element with <td> elements populated with the pertinent values derived from the entryData array.
    
    return (
      
      `
      <tr>
        <td>${entry.license}</td>
        ${priceTD}
        <td>${duration} h</td>
        <td>${timeIn}</td>
        <td>${timeOut}</td>
      </tr>
  `
    )   
  }).join('')
  
  const tabelBody = document.querySelector("#tableBody")
  tableBody.innerHTML = entryData

  //---------------------SUMARY SECTION--------------------
  
  // Average duration of all entries

  // Logic applied:
  // 1. Repeat of math to obtain the overall duration.
  // 2. Since the .map function will return a string value need to coerce result to number value.
  // 3. Average is calculated by adding each ittaration and deviding the result by the number of entries.  

  const smryDrtn = entries.map(entry=>{

    let entryTime = Math.abs(entry.out-entry.in) / 36e5;
    const duration = entryTime.toFixed(1)
    return parseInt(duration)
  })
  const avgDrtn = smryDrtn.reduce((a,b) => (a+b)) / smryDrtn.length
  
document.querySelector('#avr').textContent = `${avgDrtn.toFixed(1)} h`

// ------------------Average all entries--------------------

document.querySelector("#total").textContent = entries.length

// ----------------Average Free entries----------------------

//Filtered the array of total duration of each entry according to those less than 1 hour.

const smryFree = entries.map(entry=>{

  let entryTime = Math.abs(entry.out-entry.in) / 36e5;
  const duration = entryTime.toFixed(1)

  return duration
})
.filter(entry=> entry <= 1 ? true : false)

document.querySelector("#free").textContent = smryFree.length

// -------------Average entries over 24h-----------------

//Same logic as with free entries
// *** NOTE: Not worth refactoring the code with these two functions so as to apply 
// shared logic between them because the additional logic required over complicates things.

const smry24 = entries.map(entry=>{

  let entryTime = Math.abs(entry.out-entry.in) / 36e5;
  const duration = entryTime.toFixed(1)

  return duration
})
.filter(entry=> entry > 23.9 ? true : false)

document.querySelector("#_24").textContent = smry24.length

//------------------------------end of App-------------------------------------------
  
  
})    



      
