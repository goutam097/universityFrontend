import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component'




@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule, FormsModule
  ],
  exports: [HeaderComponent, FooterComponent],
  entryComponents: [HeaderComponent, FooterComponent]
})
export class ComponentsModule { }
