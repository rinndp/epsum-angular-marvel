import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelListComponent } from './marvel-list.component';

describe('MarvelListComponent', () => {
  let component: MarvelListComponent;
  let fixture: ComponentFixture<MarvelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarvelListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
