import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        MatDatepickerModule,    MatFormFieldModule,         MatNativeDateModule,
        MatInputModule,         BrowserAnimationsModule,    MatTabsModule,
        MatDialogModule,        MatCardModule,              MatButtonModule,
        MatSlideToggleModule,   MatSelectModule,            MatMenuModule,
        MatToolbarModule,       MatSnackBarModule,          MatSidenavModule,
        MatCheckboxModule,      MatAutocompleteModule,      MatProgressBarModule,
        MatStepperModule,       MatIconModule,              MatTableModule,
        MatExpansionModule,     MatPaginatorModule,         MatSortModule,
        MatRadioModule,         MatSliderModule,            MatStepperModule,
        MatGridListModule,      MatListModule,              MatTooltipModule,
        MatDividerModule,       MatBadgeModule,             MatBottomSheetModule,
        DragDropModule
      ],
    exports: [
        MatDatepickerModule,    MatFormFieldModule,         MatListModule,
        MatInputModule,         BrowserAnimationsModule,    MatTabsModule,
        MatDialogModule,        MatCardModule,              MatButtonModule,
        MatSlideToggleModule,   MatSelectModule,            MatMenuModule,
        MatToolbarModule,       MatSnackBarModule,          MatSidenavModule,
        MatCheckboxModule,      MatAutocompleteModule,      MatProgressBarModule,
        MatStepperModule,       MatIconModule,              MatTableModule,
        MatExpansionModule,     MatPaginatorModule,         MatSortModule,
        MatRadioModule,         MatSliderModule,            MatStepperModule,
        MatGridListModule,      MatNativeDateModule,        MatTooltipModule,
        MatDividerModule,       MatBadgeModule,             MatBottomSheetModule,
        DragDropModule
    ]
})
export class MaterialModule { }
