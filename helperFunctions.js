function monitorCount(rows, columns) {
  return rows * columns;
}
//function declaration named costOfMonitors with 2 param
function costOfMonitors(rows, columns){
//body calculates total cost
  return monitorCount(rows, columns) * 200
}
//save cost to a variable
const totalCost = costOfMonitors(5,4)
//check to see it works with console log
console.log(totalCost)
