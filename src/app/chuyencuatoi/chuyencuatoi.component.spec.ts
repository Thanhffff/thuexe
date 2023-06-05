import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuyencuatoiComponent } from './chuyencuatoi.component';

describe('ChuyencuatoiComponent', () => {
  let component: ChuyencuatoiComponent;
  let fixture: ComponentFixture<ChuyencuatoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuyencuatoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChuyencuatoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
