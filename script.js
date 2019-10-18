'use strict';
(function() {

let listForm = document.getElementById("list-form");
let newNodeData = document.getElementById("newNode-input");
let printList = document.getElementById("printList-p");

let newlist = new LinkedList;


function LinkedList() {
    this.head = null;
}

LinkedList.prototype.prepend = function(val) {
    let newNode = {
        data: val,
        next: this.head
    }
    this.head = newNode;
}

LinkedList.prototype.printNode = function() {
    let n = this.head;
    printList.innerHTML = '';
    while (n != null) {
      printList.innerHTML = printList.innerHTML + "--->" + n.data;
      n = n.next;
    }
    printList.innerHTML += '---> NULL';
  }


listForm.addEventListener('submit', function(){
    event.preventDefault();

    newlist.prepend(newNodeData.value);
    newNodeData.value = '';
    newlist.printNode();
});

})();
