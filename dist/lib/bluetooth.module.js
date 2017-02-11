import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BluetoothCore } from './bluetooth.service';
import { BrowserWebBluetooth } from './platform/browser';
export function browserWebBluetooth() {
    return new BrowserWebBluetooth();
}
;
export var WebBluetoothModule = (function () {
    function WebBluetoothModule() {
    }
    WebBluetoothModule.forRoot = function () {
        return {
            ngModule: WebBluetoothModule,
            providers: [
                BluetoothCore,
                {
                    provide: BrowserWebBluetooth,
                    useFactory: browserWebBluetooth
                },
            ]
        };
    };
    WebBluetoothModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule]
                },] },
    ];
    /** @nocollapse */
    WebBluetoothModule.ctorParameters = function () { return []; };
    return WebBluetoothModule;
}());
//# sourceMappingURL=C:/P/angular-web-bluetooth/lib/bluetooth.module.js.map