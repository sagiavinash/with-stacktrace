with-stacktrace
============

A helper to catch errors from asynchronous tasks with prior stacktrace

Installation
------------
```
npm install --save with-stacktrace
```
or
```
yarn add with-stacktrace
```  

Example Usage
-------------
```javascript
import withStacktrace from 'with-stacktrace';

function a() {
  b(); 
}

function b() {
  withStacktrace(new Promise(function asyncTask(resolve, reject) { 
    setTimeout(() => {
      reject(new Error('async error'));
    });
  })).catch(function(errorWithTrace) {
    console.log(errorWithTrace.stack);

    /* captured stacktrace (before using withStacktrace)
      Error: async error
        at setTimeout
    */

    /* captured stacktrace (after using withStacktrace)
      Error: async error
        at setTimeout (pen.js:32)
        at b (pen.js:30)
        at a (pen.js:26)
        at pen.js:40
    */
  });
}

a();
```
