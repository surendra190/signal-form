import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RxjsUse } from './rxjs-use';

describe('RxjsUse', () => {
  let component: RxjsUse;
  let fixture: ComponentFixture<RxjsUse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsUse],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsUse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
