import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AD2000Component } from './ad2000.component';

describe('AD2000Component', () => {
  let component: AD2000Component;
  let fixture: ComponentFixture<AD2000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AD2000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AD2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
