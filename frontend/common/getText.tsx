// @/common/getText.ts
type LanguageCode = 'en' | 'ta' | 'es' | 'fr'; // Add more as needed
type MultilingualText = Partial<Record<LanguageCode, string>>;

/**
 * Retrieves text in the specified language with fallback logic
 * @param content - The multilingual content or string
 * @param language - Preferred language code
 * @param fallbackLanguage - Fallback language (default: 'en')
 * @returns The translated text or empty string if not found
 */
export const getText = (
  content: MultilingualText | string | undefined,
  language: LanguageCode,
  fallbackLanguage: LanguageCode = 'en'
): string => {
  if (!content) return '';
  
  // Handle plain strings
  if (typeof content === 'string') return content;
  
  // Get preferred language text
  const text = content[language];
  if (text) return text;
  
  // Fallback logic
  if (fallbackLanguage && content[fallbackLanguage]) {
    return content[fallbackLanguage];
  }
  
  // Return first available translation if no exact match
  const firstTranslation = Object.values(content).find(Boolean);
  return firstTranslation || '';
};

// Usage examples:
// const greeting = { en: 'Hello', ta: 'வணக்கம்' };
// getText(greeting, 'ta') → 'வணக்கம்'
// getText('Simple string', 'en') → 'Simple string'
// getText(undefined, 'en') → ''