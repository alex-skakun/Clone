# cloneObject()
Function for cloning objects.

#How it works

    var clone = cloneObject(original);

What is the difference among cloneObject() and these:

    var clone = JSON.parse(JSON.stringify(original)); 
or

    var clone = angular.copy(original);

The function cloneObject() creates object with saving of prototype of original object.
For example you have:

    function User (name) {
        this.name = name;
    }
    
    User.prototype.hello = function () {
        alert('Hello, my name is ' + this.name + '!');
    };
    
    var user = new User('Alex');
    
then you want to create full copy of your `user`:

    var userCopy = cloneObject(user);
    
    // you can call methods from User.prototype;
     
    userCopy.hello(); // Hello, my name is Alex! 
    
    