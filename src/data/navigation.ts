export const sectionIds = ['home','about','services','life','contact'] as const;
export const languages = ['en','es'] as const;
export type Language = typeof languages[number];
