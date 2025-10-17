const calculate_len = (password) => {
    return password.length;
}

const calculate_n = (password) => {
    let N = 0;

    const sets = {
        lower: /[a-z]/,
        upper: /[A-Z]/,
        numbers: /[0-9]/,
        symbols: /[^a-zA-Z0-9]/
    }

    if (sets.lower.test(password)) N += 26;
    if (sets.upper.test(password)) N += 26;
    if (sets.numbers.test(password)) N += 10;
    if (sets.symbols.test(password)) N += 33;

    return N;
}

export function calculate_entropy(password) {
    const L = calculate_len(password);
    const N = calculate_n(password);
    if (N === 0) return 0;
    const entropy = L * Math.log2(N);
    return entropy;
}
