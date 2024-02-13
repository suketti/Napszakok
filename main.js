// function getQuote() {
//     fetch("https://type.fit/api/quotes")
//     .then((res) => {
//         res.json()
//     }).then((data) => {
//          let d = data
//     }).finally((d) => {
//         const randomNumber = Math.round(Math.random() * data.length)
//         document.getElementById("quote").innerText = d[randomNumber]
//     })
// }

function updateDate() {
    const currentDate = new Date()
    document.getElementById("hourMin").innerText = `${currentDate.getHours()}:${currentDate.getMinutes()}`
    document.getElementById("sec").innerText = `${currentDate.getSeconds()}`
  }

  // Update the date every second
  const timerId = setInterval(updateDate, 1000);
  getQuote();

