var add = (function () {

    var counter = 0;
    console.log("func add");
    console.log(counter);
    return function () {
        console.log("func nested");
        console.log(counter);
        counter += 1; return counter;
    }
})();

/*
add();
add();
add();*/
