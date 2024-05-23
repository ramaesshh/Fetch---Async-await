//! fetch is used to get data through api
//! it returns as a promise so inorder to get data .then() & .catch() is used ****imp****

//eg
/*
const res = fetch("https://restcountries.com/v2/all") 
res.then((data)=>data.json()).then((data1)=>{
    for(var i = 0;i<data1.length;i++){
        // console.log(`country name: ${data1[i].name} Capital :${data1[i].capital}`)
        // const div = document.createElement("div")
        // div.innerHTML = `country name: ${data1[i].name} Capital :${data1[i].capital}`
        // document.body.append(div)
              
        const div = document.createElement("div")
        div.innerHTML = `<div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src= " ${data1[i].flag} " class="card-img-top" alt="..." ></img>
            <div class="card-body">
              <h5 class="card-title">Country : ${data1[i].name}</h5>
              <p class="card-text">Capital : ${data1[i].capital}</p>
              <p class="card-text">Region : ${data1[i].region}</p>
              <p class="card-text">SubRegion : ${data1[i].subregion}</p>
              <p class="card-text">Population : ${data1[i].population}</p>
            </div>
          </div>
        </div>
      </div>`
      document.body.append(div)
    } 
})

*/

//!   Async-await  >>> any function can be turned to async function by using the keyword async

/*
async function foo(){
    const res = await fetch("https://restcountries.com/v2/all")
    const result = await res.json()
    console.log(result)
}
foo()
*/


//!   Error handling is achieved by try catch method

async function foo(){
    try {
        const res = await fetch("https://restcountries.com/v2/all")
        const result = await res.json();
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
foo();
 