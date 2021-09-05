export const required = (value) => {
    if (value) return;
    return "Field is required";
};

export const maxLenghtCreator = (maxLengthg) => (value) => {
    if (value && value.length > maxLengthg) return `Max lenght is ${maxLengthg} symbols`;
    return undefined;
};
