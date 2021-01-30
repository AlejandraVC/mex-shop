import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLanguageSelectionComponent } from './header-language-selection.component';

describe('HeaderLanguageSelectionComponent', () => {
  let component: HeaderLanguageSelectionComponent;
  let fixture: ComponentFixture<HeaderLanguageSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLanguageSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLanguageSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
