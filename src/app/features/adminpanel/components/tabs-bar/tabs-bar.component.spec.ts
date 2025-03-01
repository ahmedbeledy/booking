import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsBarComponent } from './tabs-bar.component';

describe('TabsBarComponent', () => {
  let component: TabsBarComponent;
  let fixture: ComponentFixture<TabsBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsBarComponent]
    });
    fixture = TestBed.createComponent(TabsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
