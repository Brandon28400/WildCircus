import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcircustourComponent } from './wildcircustour.component';

describe('WildcircustourComponent', () => {
  let component: WildcircustourComponent;
  let fixture: ComponentFixture<WildcircustourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildcircustourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildcircustourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
