const DEFAULT_DB_NAME = 'morpheus-pwa_db';
const DB_NAME = process.env.REACT_APP_LOCAL_STORAGE_KEY || DEFAULT_DB_NAME;
export const save = (key: string, value: any) => {
  let state = load();
  localStorage.setItem(DB_NAME, JSON.stringify({ ...state, [key]: value }));
};
export const upsertItem = (key: string, idField: string, value: any) => {
  if (!value[idField])
    throw new Error('cannot upsert item in local storage: no id provided');
  let state = load();
  let found = false;
  let arr = state[key] || [];
  let updated = arr.map((item: any) => {
    if (item[idField] === value[idField]) {
      found = true;
      return value;
    } else return item;
  });
  if (!found) updated.push(value);
  save(key, updated);
};
export const load = (key?: string) => {
  let json = localStorage.getItem(DB_NAME);
  let data;

  if (!json) {
    console.log(
      'failed to load from localStorage',
      'initializing local storage with key',
      DB_NAME
    );
    data = {};
    localStorage.setItem(DB_NAME, JSON.stringify(data));
  } else {
    data = JSON.parse(json);
  }
  return key ? data[key] : data;
};
