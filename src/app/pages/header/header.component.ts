import { Component, Input, Output ,OnInit, EventEmitter  } from '@angular/core';
import { TranslateService } from '../../service/translate-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  public supportedLangs: any;
  public translatedText: string;
  public selectedLang: any;

  constructor(public _translate: TranslateService) { 

  }

  ngOnInit() { 
      this.selectLang(this);
  }

  selectedValue(){
    this.selectLang(this.selectedLang);
  }

  // isCurrentLang(lang: any) {
  //   this.selectLang('en');
  //   return lang === this._translate.currentLang;
  // }

  selectLang(lang: any) {
    debugger;
    // set default;
    if( lang == 'en'){
          this.supportedLangs = [
            { display: 'English', value: 'en', id: '0' },
            { display: 'Hindi', value: 'hi', id: '1' },
            // { display: 'Chinese', value: 'zh', id: '2' }
          ];
          this.selectedLang = this.supportedLangs[0].value;
      }else{
          this.supportedLangs = [
            { display: 'अंग्रेज़ी', value: 'en' },
            { display: 'हिंदी', value: 'hi' },
            // { display: 'चीनी', value: 'zh' }
          ];
          this.selectedLang = this.supportedLangs[1].value;
      }
     this._translate.use(lang);
     this.refreshText();
  }

  refreshText() {
    this.translatedText = this._translate.instant(['Angular',
    'Employee',
    'Name',
    'Age',
    'search by name',
    'Change Language'])
  }

}
