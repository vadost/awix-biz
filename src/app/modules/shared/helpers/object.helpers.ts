export class ObjectHelpers {
  /**
   * @param obj
   * @returns {boolean}
   */
  static isEmptyObject(obj: Object): boolean {
    return Object.getOwnPropertyNames(obj).length === 0;
  }

  /**
   * Compare 2 objects by values.
   * Works when you have simple JSON-style objects without methods and DOM nodes inside.
   * @param first
   * @param second
   * @returns {boolean}
   */
  static isEqualByValues(first: Object, second: Object): boolean {
    return JSON.stringify(first) === JSON.stringify(second);
  }

  /**
   * Creates clone of the object, don't use it for functions
   * @param objectToClone
   * @returns {any}
   */
  static deepClone<T>(objectToClone: T): T {
    return JSON.parse(JSON.stringify(objectToClone));
  }

  /**
   * Fetch values from object
   * @param obj
   * @returns {any[]}
   */
  static getValues(obj: {[key: string]: any}): Array<any> {
    return Object.keys(obj).map(key => obj[key]);
  }
}
