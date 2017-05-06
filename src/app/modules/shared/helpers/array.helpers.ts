export class ArrayHelpers {
  /**
   * Check is value in array.
   * @param arr
   * @param item
   * @returns {boolean}
   */
  static inArray(arr: Array<any>, item: any): boolean {
    return arr.indexOf(item) !== -1;
  }

  /**
   * Remove value from array.
   * @param arr
   * @param item
   * @returns {boolean}
   */
  static removeValue(arr: Array<any>, item: any): boolean {
    const index = arr.indexOf(item);
    if (index !== -1) {
      return arr.splice(index, 1).length > 0;
    }
    return false;
  }

  /**
   * Find object in list of objects where object has key equal value
   * @param arr
   * @param key
   * @param value
   * @returns {any}
   */
  static findObjByKeyValue<T>(arr: Array<T>, key: string, value: any): T | null {
    for (let i = 0; i < arr.length; i++) {
      const obj: {[key: string]: any} = arr[i];
      if (obj[key] === value) {
        return obj as T;
      }
    }
    return null;
  };
}
