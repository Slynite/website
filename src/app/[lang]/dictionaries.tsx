const dictionaries: any = {
  en: () => import('../../../i18n/en_main.json').then((module) => module.default),
  de: () => import('../../../i18n/de_main.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
    const dictionary = dictionaries[locale]?.();
    return dictionary ?? dictionaries["en"]();
};