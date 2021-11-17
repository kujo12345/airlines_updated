import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelUserComponent } from './cancel-user.component';

describe('CancelUserComponent', () => {
  let component: CancelUserComponent;
  let fixture: ComponentFixture<CancelUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
