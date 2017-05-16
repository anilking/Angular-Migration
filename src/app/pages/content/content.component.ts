import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../service/employee.service';
import { TranslateService } from '../../service/translate-service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public employees: any = [];
  public search : string = "";
  public translatedText: string;

  constructor(public employeeService: EmployeeService, public _translate: TranslateService) { }

  ngOnInit() { 
      this.getEmployeeData();
      // this.selectLang('hi');

  }

  getEmployeeData(){
    this.employeeService.getEmployeeData()
            .subscribe(res => this.employees = res.json());

  }
    isCurrentLang(lang: string) {
      return lang === this._translate.currentLang;
    }
    
    selectLang(lang: string) {
      // set default;
      this._translate.use(lang);
      this.refreshText();
    }
    
    refreshText() {
      this.translatedText = this._translate.instant('Name');
    }
}
