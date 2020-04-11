import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRecoredComponent } from './student-recored.component';

describe('StudentRecoredComponent', () => {
  let component: StudentRecoredComponent;
  let fixture: ComponentFixture<StudentRecoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRecoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRecoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
