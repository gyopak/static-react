const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  window.PUBSUB.fire(`LOADED_DATA_${url}`, data);
};

export default () => {
  window.PUBSUB.subscribe('REQUEST_DATA', dataId => fetchData(dataId));
};
