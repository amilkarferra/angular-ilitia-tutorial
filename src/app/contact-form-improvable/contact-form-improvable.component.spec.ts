import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormImprovableComponent } from './contact-form-improvable.component';

describe('ContactFormImprovableComponent', () => {
  let component: ContactFormImprovableComponent;
  let fixture: ComponentFixture<ContactFormImprovableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormImprovableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactFormImprovableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
