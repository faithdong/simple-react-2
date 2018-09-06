/*
 * @Author: zhongxd 
 * @Date: 2018-09-06 10:50:34 
 * @Last Modified by:   zhongxd 
 * @Last Modified time: 2018-09-06 10:50:34 
 */




const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export function isUrl(path) {
  return reg.test(path);
}