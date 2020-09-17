/**
 * 元となる文字/数字が指定された長さになるように、指定された文字を補完します
 * @param value 元となる文字列 or 数字
 * @param char 左に補完する文字
 * @param length 長さ
 */
export const padLeft = (value: number | string, char: ' ' | '0' = '0', length = 2): string => {
    const prefix = char.repeat(length);
    const ret = `${prefix}${value}`.slice(length * -1);
    return ret;
};

/**
 * 日時を yyyy-mm-ddThh:mm 形式の文字列に変換します
 * @param date
 */
export const formatLocalDatetime = (date: Date, separator = 'T'): string => {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const mi = date.getMinutes();

    return `${y}-${padLeft(m)}-${padLeft(d)}${separator}${padLeft(h)}:${padLeft(mi)}`;
};

/**
 * object をディープコピーする (メソッドは不可)
 * @param obj コピーする object
 */
export const clone = <T>(obj: T): T => {
    const obj2 = JSON.parse(JSON.stringify(obj)) as T;
    return obj2;
};
