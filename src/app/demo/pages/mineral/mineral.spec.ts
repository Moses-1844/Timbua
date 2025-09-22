import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mineral } from './mineral';

describe('Mineral', () => {
  let component: Mineral;
  let fixture: ComponentFixture<Mineral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mineral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mineral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
