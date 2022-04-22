import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadTemplateComponent } from './thread-template.component';

describe('ThreadTemplateComponent', () => {
  let component: ThreadTemplateComponent;
  let fixture: ComponentFixture<ThreadTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
