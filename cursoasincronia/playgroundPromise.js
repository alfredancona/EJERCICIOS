export function delay(time, message) {
    return new Promise(function (resolve) {
      window.setTimeout(() => {
        resolve(message);
      }, time)
    }
    )
  }
  