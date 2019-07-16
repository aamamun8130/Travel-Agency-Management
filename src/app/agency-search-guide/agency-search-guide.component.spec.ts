import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencySearchGuideComponent } from './agency-search-guide.component';

describe('AgencySearchGuideComponent', () => {
  let component: AgencySearchGuideComponent;
  let fixture: ComponentFixture<AgencySearchGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencySearchGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencySearchGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
