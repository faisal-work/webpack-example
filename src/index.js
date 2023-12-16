window.addEventListener("load", function () {
  // Check if the global object has MyModule
  var MyModule = window.MyModule;
  var greeting = MyModule("Welcome to React gatherings!");

  var body = document.getElementsByTagName("body")[0];
  body.innerHTML = greeting;
});
