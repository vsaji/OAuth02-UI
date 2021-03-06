//  json2.js 
//  2016-10-28 
//  Public Domain. 
//  NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK. 
//  See http://www.JSON.org/js.html 
//  This code should be minified before deployment. 
//  See http://javascript.crockford.com/jsmin.html 
 
//  USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO 
//  NOT CONTROL. 
 
//  This file creates a global JSON object containing two methods: stringify 
//  and parse. This file provides the ES5 JSON capability to ES3 systems. 
//  If a project might run on IE8 or earlier, then this file should be included. 
//  This file does nothing on ES5 systems. 
 
//      JSON.stringify(value, replacer, space) 
//          value       any JavaScript value, usually an object or array. 
//          replacer    an optional parameter that determines how object 
//                      values are stringified for objects. It can be a 
//                      function or an array of strings. 
//          space       an optional parameter that specifies the indentation 
//                      of nested structures. If it is omitted, the text will 
//                      be packed without extra whitespace. If it is a number, 
//                      it will specify the number of spaces to indent at each 
//                      level. If it is a string (such as "\t" or "&nbsp;"), 
//                      it contains the characters used to indent at each level. 
//          This method produces a JSON text from a JavaScript value. 
//          When an object value is found, if the object contains a toJSON 
//          method, its toJSON method will be called and the result will be 
//          stringified. A toJSON method does not serialize: it returns the 
//          value represented by the name/value pair that should be serialized, 
//          or undefined if nothing should be serialized. The toJSON method 
//          will be passed the key associated with the value, and this will be 
//          bound to the value. 
 
//          For example, this would serialize Dates as ISO strings. 
 
//              Date.prototype.toJSON = function (key) { 
//                  function f(n) { 
//                      // Format integers to have at least two digits. 
//                      return (n < 10) 
//                          ? "0" + n 
//                          : n; 
//                  } 
//                  return this.getUTCFullYear()   + "-" + 
//                       f(this.getUTCMonth() + 1) + "-" + 
//                       f(this.getUTCDate())      + "T" + 
//                       f(this.getUTCHours())     + ":" + 
//                       f(this.getUTCMinutes())   + ":" + 
//                       f(this.getUTCSeconds())   + "Z"; 
//              }; 
 
//          You can provide an optional replacer method. It will be passed the 
//          key and value of each member, with this bound to the containing 
//          object. The value that is returned from your method will be 
//          serialized. If your method returns undefined, then the member will 
//          be excluded from the serialization. 
 
//          If the replacer parameter is an array of strings, then it will be 
//          used to select the members to be serialized. It filters the results 
//          such that only members with keys listed in the replacer array are 
//          stringified. 
 
//          Values that do not have JSON representations, such as undefined or 
//          functions, will not be serialized. Such values in objects will be 
//          dropped; in arrays they will be replaced with null. You can use 
//          a replacer function to replace those with JSON values. 
 
//          JSON.stringify(undefined) returns undefined. 
 
//          The optional space parameter produces a stringification of the 
//          value that is filled with line breaks and indentation to make it 
//          easier to read. 

First Commit

Work in progress
