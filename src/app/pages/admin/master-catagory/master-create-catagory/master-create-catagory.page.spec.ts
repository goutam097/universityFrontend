import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MasterCreateCatagoryPage } from './master-create-catagory.page';

describe('MasterCreateCatagoryPage', () => {
  let component: MasterCreateCatagoryPage;
  let fixture: ComponentFixture<MasterCreateCatagoryPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterCreateCatagoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MasterCreateCatagoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
