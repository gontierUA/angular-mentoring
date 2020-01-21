import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {LoaderComponent} from './loader/loader.component';
import {RouterModule} from '@angular/router';
import {IconSpriteModule} from 'ng-svg-icon-sprite';
import {TranslateModule} from '@ngx-translate/core';

const components = [
  BreadcrumbsComponent,
  FooterComponent,
  HeaderComponent,
  LoaderComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, IconSpriteModule, TranslateModule],
  declarations: [...components],
  exports: [...components],
})
export class ComponentsModule { }
