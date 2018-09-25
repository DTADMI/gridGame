import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuceComponent } from './puce.component';

describe('PuceComponent', () => {
  let component: PuceComponent;
  let fixture: ComponentFixture<PuceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
