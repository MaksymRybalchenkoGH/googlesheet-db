import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { PersonalDataComponent } from './components/personal-data/personal-data.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { HomePageComponent } from './home-page/home-page.component';
import { InfoBlockComponent } from './components/info-block/info-block.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { HeaderComponent } from './shared/header/header.component'

@NgModule({
  declarations: [AppComponent, PersonalDataComponent, HomePageComponent, InfoBlockComponent, NavigationMenuComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
