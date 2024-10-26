import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form15Component } from './form15.component';

describe('Form15Component', () => {
  let component: Form15Component;
  let fixture: ComponentFixture<Form15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Form15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
