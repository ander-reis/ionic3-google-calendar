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
import { NavController, Platform } from 'ionic-angular';
import { Calendar } from "@ionic-native/calendar";
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, calendar, plt) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.calendar = calendar;
        this.plt = plt;
        this.calendars = [];
        this.plt.ready().then(function () {
            _this.calendar.listCalendars().then(function (data) {
                _this.calendars = data;
            });
        });
    }
    HomePage.prototype.addEvent = function (cal) {
        var date = new Date();
        var options = {
            calendarId: cal.id,
            calendarName: cal.name,
            url: 'https://ionicacademy.com',
            firstReminderMinutes: 15
        };
        this.calendar.createEventInteractivelyWithOptions('My new Event', 'Münster', 'Special Notes', date, date, options).then(function (res) {
        }, function (err) {
            console.log('err: ', err);
        });
    };
    HomePage.prototype.openCal = function (cal) {
        this.navCtrl.push('CalDetailsPage', { name: cal.name });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, Calendar, Platform])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map