function StackItems(){
    this.Stack=[]
}


// add items in stack
StackItems.prototype.pushOp=function(data)
{
    this.Stack.push(data)
}

//delete item from stack
StackItems.prototype.popOp=function(data)
{
    if(Item.isEmpty()) return "stack is empty"
    this.Stack.pop(data)
}

// check empty stack
StackItems.prototype.peek=function(){
    if(Item.isEmpty()) return "stack is empty!"
    console.log(`length ${this.Stack.length}`)
    return this.Stack[this.Stack.length-1]
}

//
StackItems.prototype.isEmpty=function(){
    return !this.Stack.length
}

// create StackItems object  
var Item = new StackItems()
Item.pushOp(30) //call push function

