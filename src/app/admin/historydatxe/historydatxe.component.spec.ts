import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorydatxeComponent } from './historydatxe.component';

describe('HistorydatxeComponent', () => {
  let component: HistorydatxeComponent;
  let fixture: ComponentFixture<HistorydatxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorydatxeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorydatxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
