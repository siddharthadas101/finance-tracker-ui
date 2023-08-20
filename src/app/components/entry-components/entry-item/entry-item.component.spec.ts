import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryItemComponent } from './entry-item.component';

describe('EntryItemComponent', () => {
  let component: EntryItemComponent;
  let fixture: ComponentFixture<EntryItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntryItemComponent]
    });
    fixture = TestBed.createComponent(EntryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
