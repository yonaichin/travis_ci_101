const min = (arr) => {
  if (!Array.isArray(arr)) return console.log('Min function input require an array.')

  return arr.reduce((prev, curr) => {
    return Math.min(prev, curr)
  })

}

const max = (arr) => {
  if (!Array.isArray(arr)) return console.log('Max function input require an array.')

  return arr.reduce((prev, curr) => {
    return Math.max(prev, curr)
  })

}

const average = (arr) => {
  if (!Array.isArray(arr)) return console.log('Average function input require an array.')

  const sum = arr.reduce((prev, curr) => prev + curr)
  return sum / arr.length
}

module.exports = {
  min,
  max,
  average
}
