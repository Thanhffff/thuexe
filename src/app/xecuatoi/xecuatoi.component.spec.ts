import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XecuatoiComponent } from './xecuatoi.component';

describe('XecuatoiComponent', () => {
  let component: XecuatoiComponent;
  let fixture: ComponentFixture<XecuatoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XecuatoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XecuatoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
