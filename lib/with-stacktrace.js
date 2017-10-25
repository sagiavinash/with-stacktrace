export default function withStacktrace(task) {
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
