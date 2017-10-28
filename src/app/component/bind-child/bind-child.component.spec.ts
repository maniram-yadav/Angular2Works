/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BindChildComponent } from './bind-child.component';

describe('BindChildComponent', () => {
  let component: BindChildComponent;
  let fixture: ComponentFixture<BindChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
