import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form14Component } from './form14.component';

describe('Form14Component', () => {
  let component: Form14Component;
  let fixture: ComponentFixture<Form14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Form14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
