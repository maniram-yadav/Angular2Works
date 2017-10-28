/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BindParentComponent } from './bind-parent.component';

describe('BindParentComponent', () => {
  let component: BindParentComponent;
  let fixture: ComponentFixture<BindParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
