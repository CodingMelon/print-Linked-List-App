'use strict'

function LinkedList() {
    this.next = null;
}

LinkedList.prototype.prepend = function(data) {
    let newNode = {
        value = data,
        next = this.next
    }
    this.next = newNode;
}

function test() {
    let list = new LinkedList;
    list.prepend(5);

    console.log(list);
}

test();
