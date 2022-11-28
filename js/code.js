// fetch('../data/data.json')
// .then((res)=> {
//     return res.json()
// })
// .then((data)=> {
//     //console.table((data.results));
//     let results = data.results;
//     let record = results.filter((item)=> {
//         return item.id == 1
//     })
//     console.table(record);
// })
// .catch(()=> {
//     console.log("Please try again later");
// });

// let data = [8, 9, 12, "Thando", 26]
// data.push(20)
// data.shift(8)
// console.log(data.pop());
// let current = data.filter(item=> {
//     return item !== 9
// })
//data.unshift("Asandile")
// console.log(data.filter(item => {
//     return typeof item !== "string"
// }));
//console.log(data.filter(Number));
// let onlyNumbers = []
// for(let d of data) {
//     if(typeof d != "string")
//     onlyNumbers.push(d)
//     console.log(onlyNumbers);
// }
// let onlyNumbers = data.filter(Number);
// console.log(onlyNumbers);
// let sortedValues = onlyNumbers.sort((a, b)=> a-b)
// console.log(sortedValues);
// let first = data.slice(0, 2);
// let second = data.slice(0,3);
// let finalResult = [...first, ...second];
// console.log(finalResult);
//splice(start, removeCount, item1, item2...)
// console.log(data);
// data.splice(6, 1, "Jeff");
// console.log(data);
// (async function fetchData() {
//     let res = await fetch("../data/data.json");
//     let data = await res.json();
//     console.table(data.results);
// })();
let wrapper = document.querySelector('.wrapper');
async function fetchData() {
    let res = await fetch("https://randomuser.me/api?results=100");
    let data = await res.json();
    return data.results;
};
(async function display() {
    let data = await fetchData();
    data.forEach( (item)=> {
        //console.log(item);
        // document.write(`<p>%{item.email}</p>`)
        wrapper.innerHTML +=`<div class="card" style="width: 18rem;">
        <img src="${item.picture.large}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">${item.name.first} ${item.name.last}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
    })
})();