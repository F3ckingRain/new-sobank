interface ILocalStorageFormHandler {
  set: <T>(key: string, data?: T) => boolean;
  get: <T>(key: string) => T;
  remove: (key: string) => void;
}

const useLocalStorage = (): ILocalStorageFormHandler => ({
  set(key, data) {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  },
  get(key: string) {
    const newData = localStorage.getItem(key);
    return newData ? JSON.parse(newData) : undefined;
  },
  remove(key: string) {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
  },
});

export default useLocalStorage;
