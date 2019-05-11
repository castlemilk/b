export function poissonDiscSampler (width, height, radius) {
  var k = 30
  // maximum number of samples before rejection

  var radius2 = radius * radius

  var R = 3 * radius2

  var cellSize = radius * Math.SQRT1_2

  var gridWidth = Math.ceil(width / cellSize)

  var gridHeight = Math.ceil(height / cellSize)

  var grid = new Array(gridWidth * gridHeight)

  var queue = []

  var queueSize = 0

  var sampleSize = 0

  return function () {
    if (!sampleSize) { return sample(Math.random() * width, Math.random() * height) }

    // Pick a random existing sample and remove it from the queue.
    while (queueSize) {
      var i = (Math.random() * queueSize) | 0

      var s = queue[i]

      // Make a new candidate between [radius, 2 * radius] from the existing sample.
      for (var j = 0; j < k; ++j) {
        var a = 2 * Math.PI * Math.random()

        var r = Math.sqrt(Math.random() * R + radius2)

        var x = s.x + r * Math.cos(a)

        var y = s.y + r * Math.sin(a)

        // Reject candidates that are outside the allowed extent,
        // or closer than 2 * radius to any existing sample.
        if (x >= 0 && x < width && y >= 0 && y < height && far(x, y)) { return sample(x, y) }
        // if (x < width && y < height && far(x, y)) return sample(x, y);
      }

      queue[i] = queue[--queueSize]
      queue.length = queueSize
    }
  }

  function far (x, y) {
    var i = (x / cellSize) | 0

    var j = (y / cellSize) | 0

    var i0 = Math.max(i - 2, 0)

    var j0 = Math.max(j - 2, 0)

    var i1 = Math.min(i + 3, gridWidth)

    var j1 = Math.min(j + 3, gridHeight)

    for (j = j0; j < j1; ++j) {
      var o = j * gridWidth
      for (i = i0; i < i1; ++i) {
        if ((s = grid[o + i])) {
          var s

          var dx = s.x - x

          var dy = s.y - y
          if (dx * dx + dy * dy < radius2) return false
        }
      }
    }

    return true
  }

  function sample (x, y) {
    var s = { x: x, y: y, cx: x, cy: y }
    queue.push(s)
    grid[gridWidth * ((y / cellSize) | 0) + ((x / cellSize) | 0)] = s
    ++sampleSize
    ++queueSize
    return s
  }
}
