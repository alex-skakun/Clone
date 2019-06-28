# cloneObject()
Function for cloning objects.

# How it works
```javascript
let clone = cloneObject(original);
```
What is the difference among cloneObject() and these:
```javascript
let clone = JSON.parse(JSON.stringify(original));
```
or
```javascript
let clone = angular.copy(original);
```
The function `cloneObject()` creates object with saving of prototype of original object.
For example you have:
```javascript
class User {

    constructor (name) {
        this.name = name;
    }
    
    hello () {
        alert(`Hello, my name is ${this.name}!`);
    }
    
}

let user = new User('Alex');
```    
then you want to create full copy of your `user`:
```javascript
let userCopy = cloneObject(user);

// you can call methods from User.prototype;

userCopy.hello(); // Hello, my name is Alex! 
```
    
