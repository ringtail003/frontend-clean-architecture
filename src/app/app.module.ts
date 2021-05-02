import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryListComponent } from 'src/app/components/child/category-list/category-list.component';
import { ItemListComponent } from 'src/app/components/child/item-list/item-list.component';
import { TemplateListComponent } from 'src/app/components/child/template-list/template-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupListComponent } from './components/child/group-list/group-list.component';
import { GroupSettingComponent } from './components/child/group-setting/group-setting.component';
import { SettingComponent } from './components/container/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    GroupListComponent,
    CategoryListComponent,
    ItemListComponent,
    TemplateListComponent,
    GroupSettingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
