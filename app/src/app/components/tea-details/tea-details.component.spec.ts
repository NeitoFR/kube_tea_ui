import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaDetailsComponent } from './tea-details.component';

describe('TeaDetailsComponent', () => {
  let component: TeaDetailsComponent;
  let fixture: ComponentFixture<TeaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
