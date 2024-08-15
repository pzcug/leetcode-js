class minHeap {
  data: number[]
  constructor(data: number[]) {
    this.data = [...data]
    this.buildHeap()
  }
  buildHeap() {
    let n = this.data.length
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.siftDown(i, n)
    }
  }
  siftUp(i: number, n: number) {
    while (true) {
      let parentIndex = Math.floor((i - 1) / 2)
      let swapIndex = i
      if (parentIndex >= 0 && this.data[swapIndex] < this.data[parentIndex]) {
        swapIndex = parentIndex
      }
      if (swapIndex === i) {
        break
      }
      this.swap(i, swapIndex)
      i = swapIndex
    }
  }
  siftDown(i: number, n: number) {
    while (true) {
      let swapIndex = i
      let left = 2 * i + 1
      let right = 2 * i + 2
      if (left < n && this.data[left] < this.data[swapIndex]) {
        swapIndex = left
      }
      if (right < n && this.data[right] < this.data[swapIndex]) {
        swapIndex = right
      }
      if (swapIndex === i) {
        break
      }
      this.swap(i, swapIndex)
      i = swapIndex
    }
  }
  swap(i: number, j: number) {
    let temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }
  shift() {
    let value = this.data[0]
    this.data[0] = this.data[this.data.length - 1]
    this.data.pop()
    this.siftDown(0, this.data.length)
    return value
  }
  add(value: number) {
    this.data.push(value)
    this.siftUp(this.data.length - 1, this.data.length)
  }
}
// let test = new minHeap([1,9,10,22,31,15,40,25,91])
// console.log(test.data)
// test.shift()
// console.log(test.data)
// test.add(2)
// console.log(test.data)
export default minHeap