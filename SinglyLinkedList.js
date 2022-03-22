/*
Big O Notations Of Singly Linked List
⚡ Insertion : O(1)
⚡ Removal : It depends... O(1) or O(N)
⚡ Searching : O(N)
⚡ Access : O(N)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    console.log(arr);
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let prev = this.head;
    let temp = prev;

    while (prev.next) {
      temp = prev;
      prev = prev.next;
    }
    this.tail = temp;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return prev;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let temp = this.head;
    let count = 0;
    while (count !== index) {
      temp = temp.next;
      count++;
    }
    return temp;
  }

  set(value, index) {
    if (!this.head) return null;
    const place = this.get(index);
    if (place) {
      place.value = value;
      return true;
    }

    return false;
  }

  insert(value, index) {
    const newNode = new Node(value);
    if (index > this.length || index < 0) {
      return false;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    let place = this.get(index - 1);
    place.next = newNode;
    let temp = place.next; // saving in temp.
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;

    return removed;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let next;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }
}

/*
Push Pseudocode
*/

/*
⚡ This function should accept a value.
⚡ Create a new node using the value passed to the function.
⚡ If there is no head property on the list, set the head and tail to be the newly created node.
⚡ Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
⚡ Increment the length by 1.
⚡ Return the linked list.
*/

let list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);

/*
Pop Pseudocode
Removing a node from the end of the linked list.
*/

/*
⚡ If there are no nodes in the list, return undefined.
⚡ Loop through the list until you reach the tail.
⚡ Set the next property of the 2nd to last node to be null.
⚡ Set the tail to be the 2nd to last node.
⚡ Decrement the length of the list by 1.
⚡ Return the value of the node removed.
*/

list.pop();

/*
Shifting
Removing a new node from the beginning of the linked list.
*/

/*
Pseudocode
⚡ If there are no nodes, return undefined.
⚡ Store the current head property in a variable.
⚡ Set the head property to be the current head's next property.
⚡ Decrement by 1. 
*/

list.shift();

/*
Unshifting
Adding a new node to the beginning of the linked list.
*/

/*
Pseudocode
⚡ This function should accept a value.
⚡ Create a new node using the value passed to the function.
⚡ If there is no head property on the list, set the head and tail to be the newly created node.
⚡ Otherwise set the newly created node's next property to be the current head property on the list to be that newly created node.
⚡ Increment the length of the list by 1.
⚡ Return the linked list.
*/

list.unshift("Add ME 🎉");

/*
Get
*/

/*
⚡ This function should accept an index.
⚡ If the index is less than zero or greater than or equal to the length of the list, return null.
⚡ Loop through the list until you reach the index and return the node at that specific index.
*/

console.log(list.get(1));

/*
Set
Changing the value of a node based on it's position in the linked list.
*/

/*
Pseudocode
⚡ This function should accept a value and an index.
⚡ Use your get function to find the specific node.
⚡ If the node is found, set the value of that node to be the value is passed to the function and return true.
*/

console.log(list.set("Updated 💥", 2));

/*
Insert
*/

/*
⚡ If the index is less than zero or greater than the length, return false.
⚡ If the index is the same as the length, push a new node to the end of the list.
⚡ If the index is 0, unshift a new node to the start of the list.
⚡ Otherwise, using the get method, access the node at the index -1.
⚡ Set the next property on that node to be the new node.
⚡ Increment the length by 1.
⚡ Return true.
*/

console.log(list.insert("This is insert. 🚀", 0));

/*
Remove
Removing a node from the linked list at a specific position.
*/

/*
⚡ If the index is less than zero or greater than the length, return undefined.
⚡ If the index is the same as the length - 1, pop.
⚡ If the index is 0, shift.
⚡ Otherwise, using the get method, access the node at the index - 1.
⚡ Set the next property on that node to be the next of the next node.
⚡ Decrement the length.
⚡ Return the value of the node removed.
*/

console.log(list.remove(1));

/*
Reverse
*/

/*
Pseudocode
⚡ Swap the head and tail.
⚡ Create a variable called next.
⚡ Create a variable called prev.
⚡ Create a variable called node and initialize it to the head property.
⚡ Loop through the list.
⚡ Set next to be the next property on whatever node is.
⚡ Set the next property on the node to be whatever prev is.
⚡ Set prev to be the value of the node variable.
⚡ Set node variable to be the value of the next variable.
*/
list.reverse();
list.print();
