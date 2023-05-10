export function isWrapVariable(text: string) {
  return text.trimStart().startsWith('${{') && text.trimEnd().endsWith('}}');
}

export function wrapVariable(variable: string) {
  if (isWrapVariable(variable)) return variable;
  return `\${{ ${variable} }}`;
}

export function unwrapVariable(variable?: string) {
  if (variable === undefined) return '';
  if (!isWrapVariable(variable)) return variable;
  return variable.trim().slice(3, -2).trim();
}

export function isParentheses(text: string) {
  return text.trimStart().startsWith('(') && text.trimEnd().endsWith(')');
}

export function unwrapParentheses(text?: string) {
  if (text === undefined) return '';
  if (isParentheses(text)) {
    return text.trim().slice(1, -1).trim();
  }
  return text;
}

/**
 * Convert to string using JSON format via `JSON.stringify`
 * @param text
 * @returns
 */
export function stringify(text: unknown) {
  return JSON.stringify(text);
}

// Ref: https://dev.to/pffigueiredo/typescript-utility-keyof-nested-object-2pa3
// https://plainenglish.io/blog/advanced-typescript-type-level-nested-object-paths
// add `& (string | number)` to the keyof ObjectType
// Note: not support arrary

type B = keyof object & (string | number);

// export type NestedKeyOf<TObject extends object> = {
//   [Key in keyof TObject & (string | number)]: TObject[Key] extends object
//     ? `${Key}` | `${Key}.${NestedKeyOf<TObject[Key]>}`
//     : `${Key}`;
// }[keyof TObject & (string | number)];

type NestedKeyOf2<T, K = keyof T> = K extends keyof T & (string | number)
  ? `${K}` | (T[K] extends object ? `${K}.${NestedKeyOf<T[K]>}` : never)
  : never;

// TObject[Tkey] extends Array<unknown>
// ? `${Tkey}[${NestedKeyOf<TObject[Tkey]>}]`
// :

// type NestedKeyOf<TObject, Tkey = keyof TObject> = Tkey extends keyof TObject & (string | number)
//   ?
//       | `${Tkey}`
//       | (TObject[Tkey] extends object ? `${Tkey}.${NestedKeyOf<TObject[Tkey]>}` : never)
//       | (TObject[Tkey] extends Array<unknown> ? `${Tkey}[${NestedKeyOf<TObject[Tkey]>[number]}].` : never)
//   : never;

export type NestedKeyOf<TObject, Tkey = keyof TObject> = Tkey extends keyof TObject & (string)
  ?
      | `${Tkey}`
      | (TObject[Tkey] extends object
          ? TObject[Tkey] extends Array<infer TArray>
            ? `${Tkey}[${NestedKeyOf<TArray>}]`
            : `${Tkey}.${NestedKeyOf<TObject[Tkey]>}`
          : never)
  : never;

//
// https://devcontent.net/pavel_salauyou/how-to-get-nested-objects-or-array-value-by-string-path-in-typescript-3kd1
// TODO: Fix type later
export function getNestedValue<TObject extends object>(obj: TObject, path: string): any {
  const keys = path.split('.');
  let value = obj;

  for (let key of keys) {
    if (Array.isArray(value)) {
      value = value[parseInt(key)];
    } else {
      // @ts-ignore
      value = value[key];
    }
  }
  return value;
}
