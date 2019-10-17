export default () => {
    const events = [];
    return {
      subscribe: (eventName, fn) => {
        events[eventName] = events[eventName] || [];
        events[eventName].push(fn);
      },
      unsubscribe: (eventName, fn) => {
        if (events[eventName]) {
          for (let i = 0; i < events[eventName].length; i += 1) {
            if (events[eventName][i] === fn) {
              events[eventName].splice(i, 1);
              break;
            }
          }
        }
      },
      fire: (eventName, data) => {
        console.log({ event: eventName, payload: data });
        if (events[eventName]) {
          events[eventName].forEach(fn => fn(data));
        }
      },
    };
  };
  