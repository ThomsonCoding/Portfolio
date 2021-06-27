/* What is an API?
API is an acronym for application programming interface. An API allows end-users to access properties and methods of data structures easily and without needing to do the “behind the scenes” work.


Nodes: Nodes are the fundamental building blocks of many computer science data structures. They form the basis for linked lists, stacks, queues, trees, and more.

Links within nodes are sometimes refured to as pointers, as they point to another node. 

Nodes contain data and links to other nodes. 

If you inadvertently remove the single link to a node, that node’s data and any linked nodes could be “lost” to your application. When this happens to a node, it is called an orphaned node.

- Contain data, which can be a variety of data types
- Contain links to other nodes. If a node has no links, or they are all null, you have reached the end of the path you were following.
- Can be orphaned if there are no existing links to them
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const firstNode = new Node("I am an instance of a Node!"); // Creates the first Node. Saves it as a constant.
console.log(firstNode.data); //Runs the firstNode through the constructor and pulls data. (I am an instance of a Node)
console.log(firstNode.next); // Checks to see if the node is pointing in any other direction (To another node)

module.exports = Node; //module.exports allows the Node class to be used outside this module.

// Node Methods: Set Next Node - To set the next node we would implement .setNextNode()

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    // We create a method which we can connect the first node to the second node.
    this.next = node;
  }
}

const firstNode = new Node("I am an instance of a Node!");
const secondNode = new Node("I am the next Node!");

firstNode.setNextNode(secondNode); // This code provides the pointer from the first node to the second node.
console.log(firstNode); // You can console.log the firstnode only, but because of the pointer it will direct you to the second node too and print that as well.

module.exports = Node;

/*


  */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      // By using this line we can confirm that the node is a Node and it is not set to empty. We can use this to confirm that the second node would exist.
      this.next = node;
    } else {
      throw new Error("message");
    }
  }
}

const firstNode = new Node("I am an instance of a Node!");

firstNode.setNextNode("hi"); // This would provide an error because "hi" is a string and not a node.
module.exports = Node;

// Node Methods: Get Next Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Next node must be a member of the Node class.");
    }
  }

  getNextNode() {
    //Implementing the .getNextNode method.
    return this.next; // Using the .next properity.
  }
}

const firstNode = new Node("I am an instance of a Node!");
const secondNode = new Node("I am the next Node!");
firstNode.setNextNode(secondNode);
console.log(firstNode.getNextNode());

module.exports = Node;

// Final example

class Node {
  //Create a node class.
  constructor(data) {
    this.data = data; //Sets the data of the node, for example strawberryNode's data would be 'Berry Tasty'
    this.next = null; // Pre-sets the pointer of the node.
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Next node must be a member of the Node class.");
    }
  }

  getNextNode() {
    return this.next;
  }
}

const strawberryNode = new Node("Berry Tasty"); //Creates a strawberryNode with Berry tasty as the data.
const vanillaNode = new Node("Vanilla"); //Creates a vanillaNode with vanilla as the data.
const coconutNode = new Node("Coconuts for Coconut"); //Creates a coconutNode with vanilla as the Coconuts for Coconut as the data.

vanillaNode.setNextNode(strawberryNode); // Sets the path from the first node Vanilla to the second one Strawberry.
strawberryNode.setNextNode(coconutNode); // Sets the path from the second node Strawberry to the final node Coconut.

let currentNode = vanillaNode; // Sets the current node as vanilla which happens to be the first node.
while (currentNode) {
  // Loops through the nodes to the next node.
  console.log(currentNode.data);
  currentNode = currentNode.getNextNode(); // Saves next node as current Node to continue the loop.
}

module.exports = Node; // Inports the Node module.

/*
Linked List Introduction
Linked lists are one of the basic data structures used in computer science. They have many direct applications and serve as the foundation for more complex data structures.

The list is comprised of a series of nodes as shown in the diagram. The head node is the node at the beginning of the list. Each node contains data and a link (or pointer) to the next node in the list. The list is terminated when a node’s link is null. This is called the tail node.

Common operations on a linked list may include:
- adding nodes
- removing nodes
- finding a node
- traversing (or traveling through) the linked list


Adding a new node to the beginning of the list requires you to link your new node to the current head node. This way, you maintain your connection with the following nodes in the list.

If you accidentally remove the single link to a node, that node’s data and any following nodes could be lost to your application, leaving you with orphaned nodes.
To properly maintain the list when removing a node from the middle of a linked list, you need to be sure to adjust the link on the previous node so that it points to the following node.

*/

/*Below is an example of creating a constructor. 
constructor() {
    this.head = null;
}
*/

// Example of adding to head, adding to tail and removing head node, printing in javascript.
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

module.exports = LinkedList;

/*
Doubly Linked Lists

While a singly linked list consists of nodes with links from the one node to the next, a doubly linked list also has a link to the node before it. 
These previous links, along with the added tail property, allow you to iterate backward through the list as easily as you could iterate forward through the singly linked list.


*/
