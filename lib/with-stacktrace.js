export default function doAsyncWithStacktrace(task) {
  if (!(task instanceof Promise)) throw new Error('task argument is not a Promise');

  const stacktrace = new Error();

  return new Promise((resolve, reject) => {
    task
      .then(resolve)
      .catch((error = {}) => {
        if (Object.hasOwnProperty(error, 'message')) {
          stacktrace.message = error.message;
          stacktrace.originalError = error;
        } else if (typeof error === 'string') {
          stacktrace.message = message;
        }

        reject(stacktrace);
      });
  });
}
