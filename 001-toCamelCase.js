const toCamelCase = (str) => {
    return str.replace(/[-_\s]+(.)/g, (_, c) => c.toUpperCase());
};

console.log(toCamelCase("coding-coffee_happy"));
