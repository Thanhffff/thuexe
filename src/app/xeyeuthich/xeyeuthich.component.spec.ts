import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XeyeuthichComponent } from './xeyeuthich.component';

describe('XeyeuthichComponent', () => {
  let component: XeyeuthichComponent;
  let fixture: ComponentFixture<XeyeuthichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XeyeuthichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XeyeuthichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
