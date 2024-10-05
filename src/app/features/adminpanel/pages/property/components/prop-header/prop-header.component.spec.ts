import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropHeaderComponent } from './prop-header.component';

describe('PropHeaderComponent', () => {
  let component: PropHeaderComponent;
  let fixture: ComponentFixture<PropHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
