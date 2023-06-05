import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThecuatoiComponent } from './thecuatoi.component';

describe('ThecuatoiComponent', () => {
  let component: ThecuatoiComponent;
  let fixture: ComponentFixture<ThecuatoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThecuatoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThecuatoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
