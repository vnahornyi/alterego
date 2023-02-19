export function getFromLocalStorage<T>(key: string): T | null {
  try {
    const value = JSON.parse(localStorage.getItem(key) ?? '');

    return value ? value : null;
  } catch {
    return null;
  }
}

export function saveToLocalStorage(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(err);
  }
}

export function removeFromLocalStorage(key: string) {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error(err);
  }
}
