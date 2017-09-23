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

function getData() {
  withStacktrace(new Promise((resolve, reject) => {
    $.ajax({...}).fail((jqXHR, textStatus, errorThrown) => {
      reject('Request Failed - Status 500');
    });
  })).catch((err) => {
    console.log(err.stack);
  });
}


function doSomething() {
  getData()
    .then(renderView)
    .catch((e) => {
      Raven.caputureException(e);

      /* captured stacktrace (before using withStacktrace)
        "Error: Request Failed - Status 500
            at anonymoous function
      */

      /* captured stacktrace (after using withStacktrace)
        "Error: Request Failed - Status 500
            at withStacktrace
            at doSomething
            at getData
      */
    });
}

doSomething();
```
