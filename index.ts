function capitalize(str: string): string {
    let regexp = /\b[a-z]/g;
    return str.replace(regexp, (str) => str.toUpperCase());
}

export default capitalize;