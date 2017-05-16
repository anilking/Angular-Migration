import { LANG_ZH_NAME, LANG_ZH_TRANS } from './../pages/languages/zh';
import { LANG_ES_NAME, LANG_ES_TRANS } from './../pages/languages/es';
import { LANG_EN_NAME, LANG_EN_TRANS  } from './../pages/languages/en';
import { LANG_HI_NAME, LANG_HI_TRANS } from './../pages/languages/hi';
import { LANG_FI_NAME, LANG_FI_TRANS } from './../pages/languages/FI';
import { OpaqueToken } from '@angular/core';


// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all traslations
export const dictionary = {
	[LANG_EN_NAME]: LANG_EN_TRANS,
	[LANG_ES_NAME]: LANG_ES_TRANS,
	[LANG_ZH_NAME]: LANG_ZH_TRANS,
	[LANG_FI_NAME]: LANG_FI_TRANS,
	[LANG_HI_NAME]: LANG_HI_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
	{ provide: TRANSLATIONS, useValue: dictionary },
];