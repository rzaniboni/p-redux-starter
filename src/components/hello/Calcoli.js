export const sqrt = Math.sqrt;

export function somma(x, y) {
    return x + y;
}

export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}


export default somma;