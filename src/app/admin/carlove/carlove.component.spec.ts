import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarloveComponent } from './carlove.component';

describe('CarloveComponent', () => {
  let component: CarloveComponent;
  let fixture: ComponentFixture<CarloveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarloveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarloveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
