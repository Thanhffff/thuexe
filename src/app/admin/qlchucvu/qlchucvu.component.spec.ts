import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlchucvuComponent } from './qlchucvu.component';

describe('QlchucvuComponent', () => {
  let component: QlchucvuComponent;
  let fixture: ComponentFixture<QlchucvuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlchucvuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QlchucvuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
