for (var i = 0; i < 5; i++) { 
   function clouser(x) {
    setTimeout(function () { 
        console.log(x); 
    }, i * 1000); 
   }
   clouser(i);
}
