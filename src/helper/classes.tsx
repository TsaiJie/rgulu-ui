function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

export default classes;

interface Options {
  extra: string | undefined;
}
// key 全是字符串  value全部是 boolean
interface ClassToggles {
  [Key: string]: boolean;
}

/*
   Object.entries({a:1, c:2, b:3})
    out:0: (2) ["a", 1]
        1: (2) ["c", 2]
        2: (2) ["b", 3]
  * */
// name = {hasAside: true, active: false, x:true, y:false}
// ['hasAside', 'x']
// ['.gulu-layout-hasAside', '.gulu-layout-x']'
// .gulu-layout-hasAside .gulu-layout-x
const scopedClassMaker = (prefix: string) => (
  name: string | ClassToggles,
  options?: Options,
) => {
  return (
    Object
      //判断name是否是object, 如果不是就变为object, 把对象变为数组
      .entries(name instanceof Object ? name : { [name]: name })
      // 把false的给过滤掉
      .filter(kv => kv[1] !== false)
      // 返回第一项 也就是key
      .map(kv => kv[0])
      // 对key进行连接
      .map(name => {
        return [prefix, name].filter(Boolean).join('-');
      })
      // 如果有options 那么就加上options
      .concat((options && options.extra) || [])
      .join(' ')
  );
};

export { scopedClassMaker };
