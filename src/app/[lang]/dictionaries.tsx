const dictionaries: any = {
  en: () => import('../../../i18n/en.json').then((module) => module.default),
  de: () => import('../../../i18n/de.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
    const dictionary = dictionaries[locale]?.();
    return dictionary ?? dictionaries["en"]();
};