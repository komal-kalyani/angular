import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcomponent3Component } from './subcomponent3.component';

describe('Subcomponent3Component', () => {
  let component: Subcomponent3Component;
  let fixture: ComponentFixture<Subcomponent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcomponent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcomponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
