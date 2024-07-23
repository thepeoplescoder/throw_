export function throw_(thing: any): never {
  throw typeof thing === "function" ? thing() : thing;
};