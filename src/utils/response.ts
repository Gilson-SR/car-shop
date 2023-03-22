const res = (status: number, message: unknown) => ({ status, message });
const resError = (status: number, message: unknown) => ({ status, message });

export { res, resError };