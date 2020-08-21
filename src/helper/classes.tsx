function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
  
}

export default classes;


interface Options {
  extra: string | undefined;
}

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
const scopedClassMaker = (prefix: string) =>
  (name: string | ClassToggles, options?: Options) =>
    Object
    .entries(name instanceof Object ? name : {[name]: name})
    .filter(kv => kv[1] !== false)
    .map(kv => kv[0])
    .map(name => {
      return [prefix, name].filter(Boolean).join('-');
    })
    .concat(options && options.extra || [])
    .join(' ');


export {scopedClassMaker};
