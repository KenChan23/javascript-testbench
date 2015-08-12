var Node = require('./node');

/**
 * A linked list is a linear data structure where each element is a separate object.
 * Given its a dynamic data structure, the number of nodes is not fixed, and the list
 * can grow and shrink on demand.
 * @param {void}
 * @return {LinkedList}
 */
var LinkedList = module.exports = function LinkedList(){
  this.head = null;
  this.length = 0;
};

/**
 * Add a new item to the end of the list.
 * @param {int}
 * @return {void}
 */
LinkedList.prototype.append = function(data){
  var current;
  var node = new Node(data);

  //  If the linked list has no element, make the head the new node.
  if(!head){
    this.head = node;
  }
  else{
    current = this.head;

    while(current.next){
      current = current.getNext();
    }

    //  Iterate until the last item is obtained.
    //  The last item has no next node.
    current.setNext(node);
  }

  this.length++;
};

/**
 *
 * @param {}
 * @return {}
 */
LinkedList.prototype.insert = function(position, data){

};

/**
 *
 * @param {}
 * @return {}
 */
LinkedList.prototype.remove = function(){

};

/**
 *
 * @param {}
 * @return {}
 */
LinkedList.prototype.indexOf = function(){

};

/**
 *
 * @param {}
 * @return {}
 */
LinkedList.prototype.removeAt = function(){

};

/**
 *
 * @param {}
 * @return {}
 */
LinkedList.prototype.isEmpty = function(){
  return this.length === 0;
};

/**
 *
 * @param {}
 * @return {}
 */
LinkedList.prototype.size = function(){
  return this.length;
};

/**
 *
 * @param {}
 * @return {}
 */
LinkedList.prototype.getHead = function(){
  return this.head;
};

/**
 *
 * @param {}
 * @return {}
 */
LinkedList.prototype.toString = function(){
  var string = '[';
  var current = this.head;

  while(current){
    string += current.getData();
    current = current.getNext();
    if(current){
      string += ' ';
    }
    else{
      string += ']'
    }
  }

  return string;
};
