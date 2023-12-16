var MyModule = function(message) {
    var template = '<h2>Hi there ' + message + '!</h2>';

    return template;
}


// module.exports = MyModule;   


if (typeof module !== 'undefined' && module.exports) {
    // If in a Node.js environment, export the module
    module.exports = MyModule;
  } else {
    // If in a browser environment, attach the module to the global object (self or window)
    (typeof self !== 'undefined' ? self : window).MyModule = MyModule;
  }

