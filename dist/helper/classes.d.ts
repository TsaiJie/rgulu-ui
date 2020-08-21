declare function classes(...names: (string | undefined)[]): string;
export default classes;
interface Options {
  extra: string | undefined;
}
interface ClassToggles {
  [Key: string]: boolean;
}
declare const scopedClassMaker: (
  prefix: string,
) => (name: string | ClassToggles, options?: Options | undefined) => string;
export { scopedClassMaker };
