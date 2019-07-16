import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencydashboardComponent } from './agencydashboard.component';

describe('AgencydashboardComponent', () => {
  let component: AgencydashboardComponent;
  let fixture: ComponentFixture<AgencydashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencydashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
