/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookslotComponent } from './bookslot.component';

describe('BookslotComponent', () => {
  let component: BookslotComponent;
  let fixture: ComponentFixture<BookslotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookslotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
