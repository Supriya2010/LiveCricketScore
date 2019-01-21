import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InningComponent } from './inning.component';

describe('InningComponent', () => {
  let component: InningComponent;
  let fixture: ComponentFixture<InningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
