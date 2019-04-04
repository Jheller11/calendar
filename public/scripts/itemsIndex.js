console.log('items index script initialized')
console.log(items)

const list = document.querySelector('.item-list')

class Item {
  constructor(item) {
    this.title = item.title
    this.url = item.url
    this.created = item.created
    this.dateTime = item.dateTime
    this.length = item.length
    this.recurring = item.recurring
    this.completed = item.completed
    this.id = item._id
  }

  //   mount to DOM
  mount() {
    let li = document.createElement('li')
    li.innerText = this.title
    li.setAttribute('id', this.id)
    list.appendChild(li)
  }

  //   unmount from DOM
  unmount() {
    let target = document.getElementById(this.id)
    list.removeChild(target)
  }

  // delete from db
}

let instances = []
items.forEach(item => {
  instances.push(new Item(item))
})
console.log(instances)

instances.forEach(item => {
  item.mount()
})

instances[2].unmount()
