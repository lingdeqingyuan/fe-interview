const getType = (detected) => {
  return Object.prototype.toString.call(detected).slice(8, -1).toLowerCase()
}

console.log(getType(Symbol()))