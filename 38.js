function a() {
    // setTimeout callback function create clouser with var i but
    // var are function in scope means only one variable is created throught the function
    // for loop continouslly update that variable value
    // when callback get change to execute it found that 6 value updated var i
    // for(var i = 1; i <= 5; i++) {
    //     setTimeout(function() {
    //         console.log(i);
    //     });
    // }

    // to solve this problem we can use let
    // let are block in scope means for each iteration seprate copy is created
    // callback function create clouser with different memeory location variable
    // for(let i = 1; i <= 5; i++) {
    //     setTimeout(function() {
    //         console.log(i);
    //     });
    // }

    // if we want to use var only and want to print 1 to 5
    // here we can not directlly pass i inside callback function because 
    // if we use parameter then we have to pass that parameter and we are not executing 
    // that callback function js execute that function after some timeout
    // this will print undefined
    // for(var i = 1; i <= 5; i++) {
    //     setTimeout(function(i) {
    //         console.log(i);
    //     }, i * 1000);
    // }

    // to solve this problem we can create function and pass as argument so seprate copy is created
    for(var i = 1; i <= 5; i++) {
        function clouse(x) {
            setTimeout(function() {
                console.log(x);
            }, i * 1000);
        }
        clouse(i);
    }
    console.log('Namaste js');
}
a();