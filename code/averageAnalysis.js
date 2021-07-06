function averageAnalysis(arr) {
  return {
    average: arr.reduce((prev, cur) => cur + prev, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  }
}

module.exports = averageAnalysis
