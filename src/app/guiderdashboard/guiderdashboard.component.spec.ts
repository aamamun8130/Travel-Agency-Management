import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiderdashboardComponent } from './guiderdashboard.component';

describe('GuiderdashboardComponent', () => {
  let component: GuiderdashboardComponent;
  let fixture: ComponentFixture<GuiderdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiderdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiderdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
