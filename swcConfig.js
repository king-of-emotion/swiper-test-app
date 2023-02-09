module.exports = {
    sourceMaps: false,
    minify: false,
    jsc: {
        target: "es2021",
        parser: {
            syntax: "typescript",
            tsx: true,
        },
        transform: {
            useDefineForClassFields: true,
            react: {
                runtime: "automatic",
            },
        },
    },
};
