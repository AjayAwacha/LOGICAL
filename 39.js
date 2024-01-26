function outer() {
    function inner() {
        console.log(a);
    }
    var a = 10;
    return inner;
}

outer()();