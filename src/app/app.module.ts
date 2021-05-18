import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RequirePasswordMatchDirective } from './shared/require-password-match.directive';
import { RequireNoRepeatingNumbersDirective } from './shared/require-no-repeating-numbers.directive';
import { RequireNumberDirective } from './shared/require-number.directive';
import { RequireSpecialCharacterDirective } from './shared/require-special-character.directive';

@NgModule({
    declarations: [
        AppComponent,
        RequireNumberDirective,
        RequireSpecialCharacterDirective,
        RequireNoRepeatingNumbersDirective,
        RequirePasswordMatchDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
