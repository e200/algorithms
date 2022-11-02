const QuickUnion = require('../src/quick_union/index.js')

test('should make an object with keys and values from 1 to 9', () => {
  const qu = new QuickUnion()

  qu.make(9)

  expect(qu.get()).toStrictEqual({ "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9 })
})

test('should connect 3 to 4', () => {
  const qu = new QuickUnion()

  qu.make(4)
  qu.connect(3, 4)

  expect(qu.get()).toStrictEqual({ "1": 1, "2": 2, "3": 4, "4": 4 })
})

test('should connect 1 to 2, then 2 to 3 so that 1 is connected to 3', () => {
  const qu = new QuickUnion()

  qu.make(4)

  qu.connect(1, 2)
  expect(qu.get()).toStrictEqual({ "1": 2, "2": 2, "3": 3, "4": 4 })

  qu.connect(2, 3)
  expect(qu.get()).toStrictEqual({ "1": 3, "2": 3, "3": 3, "4": 4 })

  qu.connect(4, 3)
  expect(qu.get()).toStrictEqual({ "1": 3, "2": 3, "3": 3, "4": 3 })
})
