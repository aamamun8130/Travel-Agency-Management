import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcreateofferComponent } from './acreateoffer.component';

describe('AcreateofferComponent', () => {
  let component: AcreateofferComponent;
  let fixture: ComponentFixture<AcreateofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcreateofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcreateofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
