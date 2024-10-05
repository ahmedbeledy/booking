import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropHomeComponent } from './prop-home.component';

describe('PropHomeComponent', () => {
  let component: PropHomeComponent;
  let fixture: ComponentFixture<PropHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
