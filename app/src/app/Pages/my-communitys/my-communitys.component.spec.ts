import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCommunitysComponent } from './my-communitys.component';

describe('MyCommunitysComponent', () => {
  let component: MyCommunitysComponent;
  let fixture: ComponentFixture<MyCommunitysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCommunitysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCommunitysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
