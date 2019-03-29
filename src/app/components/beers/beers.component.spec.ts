import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NbThemeModule } from '@nebular/theme';
import { NbLayoutModule, NbSidebarService, NbCardModule } from '@nebular/theme';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { BeersComponent } from './beers.component';
import { Beer } from 'src/app/models/Beer';
// import { BeerItemComponent } from '../beer-item/beer-item.component';

@Component({ selector: 'app-beer-item', template: '' , inputs: ['beer']})
class BeerItemStubComponent { }


describe('BeersComponent', () => {
  let component: BeersComponent;
  let fixture: ComponentFixture<BeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BeersComponent,
        BeerItemStubComponent
       ],
      imports: [
        NbThemeModule,
        NbLayoutModule,
        NbCardModule
      ],
      providers: [NbSidebarService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
