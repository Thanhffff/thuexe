import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlmanhinhComponent } from './qlmanhinh.component';

describe('QlmanhinhComponent', () => {
  let component: QlmanhinhComponent;
  let fixture: ComponentFixture<QlmanhinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlmanhinhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QlmanhinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
