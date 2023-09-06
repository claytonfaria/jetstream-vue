import { trans } from 'laravel-vue-i18n';

type TranslationKey = keyof typeof import('../../../lang/pt_BR.json');

interface ReplacementsInterface {
  [key: string]: string
}

/**
 * Get the translation for the given key.
 * @param key
 * @param replacements
 */
export function t(key: TranslationKey, replacements?: ReplacementsInterface): string {
  return trans(key, replacements);
}
