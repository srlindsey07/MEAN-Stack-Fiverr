import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryListingsComponent } from './subcategory-listings.component';

describe('SubcategoryListingsComponent', () => {
  let component: SubcategoryListingsComponent;
  let fixture: ComponentFixture<SubcategoryListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryListingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubcategoryListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
