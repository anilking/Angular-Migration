import { LANG_EN_NAME, LANG_EN_TRANS  } from './../pages/languages/en';
import { LANG_HI_NAME, LANG_HI_TRANS } from './../pages/languages/hi';
import { OpaqueToken } from '@angular/core';


// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all traslations
const dictionary = {
	[LANG_EN_NAME]: LANG_EN_TRANS,
	[LANG_HI_NAME]: LANG_HI_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
	{ provide: TRANSLATIONS, useValue: dictionary },
];