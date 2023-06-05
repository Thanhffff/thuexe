import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatxeComponent } from './datxe.component';

describe('DatxeComponent', () => {
  let component: DatxeComponent;
  let fixture: ComponentFixture<DatxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatxeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
