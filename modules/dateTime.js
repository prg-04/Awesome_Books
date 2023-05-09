import DateTime from '../node_modules/luxon/src/datetime.js';

const now = () => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.querySelector('#now').innerHTML = now;
};

export default now;
