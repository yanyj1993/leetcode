/**
 * initialize your data structure here.
 */
var MinStack = function() {

    this.data = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    return this.data.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.data.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.data.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    var min = this.data.length > 0 ? this.data[0] : null;
    for(var i = 0; i < this.data.length; i++) {
        min = min < this.data[i] ? min : this.data[i];
    }

    return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.top());
console.log(minStack.getMin());

