const res = (s: number, m: unknown) => ({ status: s, message: m });
const resError = (s: number, m: unknown) => ({ status: s, message: { message: m } });

export { res, resError };