import { CheckoutsubtotalComponent } from './../../Components/checkoutsubtotal/checkoutsubtotal.component';
//import { CheckoutsubtotalComponent } from './checkoutsubtotal.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CheckoutsubtotalComponent', () => {
  let component: CheckoutsubtotalComponent;
  let fixture: ComponentFixture<CheckoutsubtotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutsubtotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutsubtotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
