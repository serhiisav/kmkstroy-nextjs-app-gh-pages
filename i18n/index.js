const en = require("./translations.en.json");
const ua = require("./translations.ua.json");

const i18n = {
    translations: {
        ua,
        en,
    },
    defaultLang: "ua",
    useBrowserDefault: true,
};

module.exports = i18n;