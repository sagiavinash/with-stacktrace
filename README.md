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

function withStacktrace(task) {
  if (!(task instanceof Promise)) throw new Error('task argument is not a Promise');

  const stacktrace = new Error();

  return new Promise((resolve, reject) => {
    task
      .then(resolve) 
      .catch((error = {}) => {
        if ('message' in error) {
          stacktrace.message = error.message;
          stacktrace.originalError = error;
          stacktrace.stack = (
            error.stack + '\n' + stacktrace.stack.split('\n').slice(2).join('\n')
          );
        } else if (typeof error === 'string') {
          stacktrace.message = error;
        }

        reject(stacktrace);
      });
  });
}

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
