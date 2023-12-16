// window.addEventListener('load', function () {
//     var greet = require('../greet');
//     var greeting = greet('Wecome to React gatherings!');
//     var body = document.getElementsByTagName('body')[0];
//     body.innerHTML = greeting;
// });




window.addEventListener('load', function () {
    // Check if the global object has MyModule
    var MyModule = (typeof window !== 'undefined' && window.MyModule) ? window.MyModule : null;

    // If MyModule is not available, dynamically load greet.js
    if (!MyModule) {
        var script = document.createElement('script');
        script.src = '../greet.js';

        script.onload = function () {
            MyModule = window.MyModule;
            // Use the imported module
            var greeting = MyModule('Welcome to React gatherings!');
            
            var body = document.getElementsByTagName('body')[0];
            body.innerHTML = greeting;
        };

        document.head.appendChild(script);
    } else {
        // Use the imported module
        var greeting = MyModule('Welcome to React gatherings!');
        
        var body = document.getElementsByTagName('body')[0];
        body.innerHTML = greeting;
    }
});


//run npx webpack 