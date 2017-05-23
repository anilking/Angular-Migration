import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ContentComponent } from './pages/content/content.component';
import { EmployeeService } from './service/employee.service';
import { SearchPipe } from './pipes/search.pipe';
import { TranslateService } from './service/translate-service';
import { TRANSLATION_PROVIDERS } from './service/translations';
import { TRANSLATIONS } from './service/translations';
import { TranslatePipe } from './pipes/translate.pipe';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SearchPipe,
    TranslatePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    EmployeeService,
    TranslateService,
    TRANSLATION_PROVIDERS
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
