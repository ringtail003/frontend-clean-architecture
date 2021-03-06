import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryListComponent } from 'src/app/components/child/category-list/category-list.component';
import { ItemListComponent } from 'src/app/components/child/item-list/item-list.component';
import { LoadingComponent } from 'src/app/components/child/loading/loading.component';
import { TemplateListComponent } from 'src/app/components/child/template-list/template-list.component';
import { TypeListComponent } from 'src/app/components/child/type-list/type-list.component';
import { ValidationErrorsComponent } from 'src/app/components/child/validation-errors/validation-errors.component';
import { NgForTrackByIdDirective } from 'src/app/directives/ng-for-track-by-field-directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisabledComponent } from './components/child/disabled/disabled.component';
import { GroupListComponent } from './components/child/group-list/group-list.component';
import { GroupSettingComponent } from './components/child/group-setting/group-setting.component';
import { SpinnerComponent } from './components/child/spinner/spinner.component';
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
    LoadingComponent,
    NgForTrackByIdDirective,
    TypeListComponent,
    DisabledComponent,
    SpinnerComponent,
    ValidationErrorsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
