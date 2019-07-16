import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyUpdateProfileComponent } from './agency-update-profile.component';

describe('AgencyUpdateProfileComponent', () => {
  let component: AgencyUpdateProfileComponent;
  let fixture: ComponentFixture<AgencyUpdateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyUpdateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
