;(function() {
  'use strict'

  console.log('items index script initialized')

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
    //   construct DOM element
    construct() {
      //  using codepen to create a style/html structure for all info
      return `<div>${this.title} (${this.created})</div>`
    }
    //   mount to DOM
    mount() {
      let li = document.createElement('li')
      li.innerHTML = this.construct()
      li.setAttribute('id', this.id)
      list.appendChild(li)
    }

    //   unmount from DOM
    unmount() {
      let target = document.getElementById(this.id)
      list.removeChild(target)
    }

    // delete from db
    // AJAX request to server and return new items then call initialize with new items

    // mark complete
    // AJAX request to server and return new items then call initialize with new items
  }

  // initialize list
  const initialize = items => {
    let instances = []
    items.forEach(item => {
      instances.push(new Item(item))
    })
    console.log(instances)

    instances.forEach(item => {
      item.mount()
    })
  }

  initialize(items)
})()
