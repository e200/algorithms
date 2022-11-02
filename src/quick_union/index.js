class QuickUnion {
  constructor() {
    this.union = {}
  }

  make(length) {
    for (let i = 1; i <= length; i++) {
      this.union[i] = i
    }
  }

  get() {
    return this.union
  }

  isConnected(p1, p2) {
    return (this.union[p1] === this.union[p2])
  }

  connect(p1, p2) {
    if (!this.isConnected(p1, p2)) {
      const oldP1 = this.union[p1]

      this.union[p1] = this.union[p2]

      if (p1 < p2) {
        if (p1 - 1 >= 0 && this.union[p1 - 1] === oldP1) {
          this.connect(p1 - 1, this.union[p1])
        }
      } else if (p1 + 1 === Object.keys(this.union).length && p1 > p2) {
        this.connect(p1 + 1, this.union[p1])
      }
    }
  }
}

module.exports = QuickUnion
