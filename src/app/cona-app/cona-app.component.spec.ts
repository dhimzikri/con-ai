import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConaAppComponent } from './cona-app.component';

describe('ConaAppComponent', () => {
  let component: ConaAppComponent;
  let fixture: ComponentFixture<ConaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConaAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
