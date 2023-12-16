window.addEventListener('load', function () {
    var greet = require('../greet');
    var greeting = greet('Wecome to React gatherings!');
    var body = document.getElementsByTagName('body')[0];
    body.innerHTML = greeting;
});
