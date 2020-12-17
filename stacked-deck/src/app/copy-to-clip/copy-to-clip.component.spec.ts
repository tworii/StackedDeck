import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyToClipComponent } from './copy-to-clip.component';

describe('CopyToClipComponent', () => {
  let component: CopyToClipComponent;
  let fixture: ComponentFixture<CopyToClipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyToClipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyToClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
