import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateproPage } from './updatepro.page';

describe('UpdateproPage', () => {
  let component: UpdateproPage;
  let fixture: ComponentFixture<UpdateproPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateproPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
