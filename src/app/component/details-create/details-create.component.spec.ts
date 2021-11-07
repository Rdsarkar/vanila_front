import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCreateComponent } from './details-create.component';

describe('DetailsCreateComponent', () => {
  let component: DetailsCreateComponent;
  let fixture: ComponentFixture<DetailsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
