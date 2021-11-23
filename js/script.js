let min = 1
let max = 25
let sufix = 'kit'
let kit_container = document.querySelector(".kit_container")

let table = document.createElement('table');
table.className = "kit_game_table"
let tbody = document.createElement('tbody')
for (let i = 0; i < 5; i++) {
  let tr = document.createElement('tr')
  tr.append(document.createElement('td'))
  tr.append(document.createElement('td'))
  tr.append(document.createElement('td'))
  tr.append(document.createElement('td'))
  tr.append(document.createElement('td'))
  tbody.append(tr)
}
table.append(tbody)
kit_container.append(table);

document.getElementById('kit_start').addEventListener("click", () => {
  start()
})

function start() {
  let arr_1d = getRandomArray()

  let counter = 0
  let jq_rows = $('.kit_game_table').children().children()

  for (let row of jq_rows) {
    let jq_cells = row.children
    for (let cell of jq_cells) {
      $(cell).html(`<p id="${arr_1d[counter]}_id_td" class="${sufix + '_p_style_1'}">${arr_1d[counter++]}</p>`);
    }
  }

  for (let j of arr_1d) {
    document.getElementById(`${j}_id_td`).addEventListener('click', () => {
      let result = Number.parseInt(document.getElementById(`${j}_id_td`).textContent)
      document.getElementById(`${j}_id_td`).textContent = result + 5
    })
  }
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function getRandomArray() {
  let arr = []
  for (let i = 1; i <= max; i++) {
    arr.push(i)
  }
  arr = shuffle(arr)
  return arr
}




