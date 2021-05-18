import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RequirePasswordMatchDirective } from './shared/require-password-match.directive';
import { RequireNoRepeatingNumbersDirective } from './shared/require-no-repeating-numbers.directive';
import { RequireNumberDirective } from './shared/require-number.directive';
import { RequireSpecialCharacterDirective } from './shared/require-special-character.directive';
import { XOrCheckComponent } from './shared/x-or-check/x-or-check.component';
import { PasswordReqLiComponent } from './shared/password-req-li/password-req-li.component';

@NgModule({
    declarations: [
        AppComponent,
        RequireNumberDirective,
        RequireSpecialCharacterDirective,
        RequireNoRepeatingNumbersDirective,
        RequirePasswordMatchDirective,
        XOrCheckComponent,
        PasswordReqLiComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
