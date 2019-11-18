var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Calendar } from "@ionic-native/calendar/ngx";
/**
 * Generated class for the CalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalDetailsPage = /** @class */ (function () {
    function CalDetailsPage(navCtrl, navParams, calendar, plt) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calendar = calendar;
        this.plt = plt;
        this.calName = '';
        this.events = [];
        this.calName = navParams.get('name');
        if (this.plt.is('ios')) {
            this.calendar.findAllEventsInNamedCalendar(this.calName).then(function (data) {
                _this.events = data;
            });
        }
        else if (this.plt.is('android')) {
            var start = new Date();
            var end = new Date();
            end.setDate(end.getDate() + 31);
            this.calendar.listEventsInRange(start, end).then(function (data) {
                _this.events = data;
            });
        }
    }
    CalDetailsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-cal-details',
            templateUrl: 'cal-details.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, typeof (_a = typeof Calendar !== "undefined" && Calendar) === "function" && _a || Object, Platform])
    ], CalDetailsPage);
    return CalDetailsPage;
    var _a;
}());
export { CalDetailsPage };
//# sourceMappingURL=cal-details.js.map