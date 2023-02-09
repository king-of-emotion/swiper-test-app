module.exports = {
    automock: false,
    transform: {
        "^.+\\.(css|scss)$": "jest-transform-stub",
        "^.+\\.(t|j)sx?$": ["@swc/jest", require("./swcConfig")],
    },
    testEnvironment: "jsdom",
    roots: ["<rootDir>/src/"],
    resetModules: true,
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    unmockedModulePathPatterns: ["/node_modules/*"],
    fakeTimers: {
        enableGlobally: true,
    },
    transformIgnorePatterns: [
        "/node_modules/(?!swiper|ssr-window|dom7|p-settle|p-reflect|p-limit|yocto-queue).+\\.js$",
    ],
    moduleNameMapper: {
        "^.*\\.css$": "identity-obj-proxy",
        "^React$": "react",
        "^ReactDOM$": "react-dom",
    },
};
