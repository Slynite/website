const dictionaries: any = {
  en: () => import('../../../dictionaries/en.json').then((module) => module.default),
  de: () => import('../../../dictionaries/de.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
    const dictionary = dictionaries[locale]?.();
    return dictionary ?? dictionaries["en"]();
};