const dictionaries: any = {
  en: () => import('../../../i18n/en/main.json').then((module) => module.default),
  de: () => import('../../../i18n/de/main.json').then((module) => module.default),
}

export const getMainDictionary = async (locale: string) => {
    const dictionary = dictionaries[locale]?.();
    return dictionary ?? dictionaries["en"]();
};

export const getDictionaryByName = async (locale:  string, name: string) => {
    return import('../../../i18n/' + locale + '/' + name + '.json').then((module) => module.default);
}