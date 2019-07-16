import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakehistoryComponent } from './makehistory.component';

describe('MakehistoryComponent', () => {
  let component: MakehistoryComponent;
  let fixture: ComponentFixture<MakehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
