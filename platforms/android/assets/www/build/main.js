webpackJsonp([0],{

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Gio/IonicProjects/Test2/src/pages/tabs/tabs.html"*/'<ion-tabs color="good">\n  <ion-tab [root]="tab1Root" tabTitle="" tabIcon="md-search" placeholder="bye"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon="md-settings"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/Gio/IonicProjects/Test2/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function () {
    function AboutPage(geolocation, vibration, navCtrl) {
        this.geolocation = geolocation;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.vibrate = function () {
        this.vibration.vibrate(3000);
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/Gio/IonicProjects/Test2/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color ="good">\n    <ion-title style= "text-align: center;">\n      Setting\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style= "background-color: #f4f4f4 !important;" padding>\n\n    <ion-item color= "light">\n      <ion-label>Notifications</ion-label>\n      <ion-toggle color= "good" value="notif" checked="true"></ion-toggle>\n    </ion-item>\n\n    <br/><ion-item color= "light" large>\n      <ion-label>Vibration</ion-label>\n      <ion-toggle color= "good" value="vib" checked="true"></ion-toggle>\n    </ion-item>\n\n    <br/><ion-item color= "light">\n      <ion-label>Ringtone</ion-label>\n      <ion-toggle color= "good" value="vib" checked="true"></ion-toggle>\n    </ion-item>\n\n   <br/><ion-item color ="light">\n  <ion-range color= "good" [(ngModel)]="volume">\n    <ion-icon range-left name="md-volume-mute"></ion-icon>\n    <ion-icon range-right name="md-volume-up"></ion-icon>\n  </ion-range>\n   </ion-item>\n\n   <br/><ion-buttons large>\n     <button color ="good" ion-button (click)="vibrate()" block>Vibrate Test</button>\n   </ion-buttons>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Gio/IonicProjects/Test2/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/Gio/IonicProjects/Test2/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Gio/IonicProjects/Test2/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__set_alarm_set_alarm__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

var HomePage = (function () {
    function HomePage(geolocation, vibration, navCtrl, platform) {
        var _this = this;
        this.geolocation = geolocation;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.platform = platform;
        platform.ready().then(function () {
            _this.loadMap();
        });
    }
    HomePage.prototype.setAlarm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__set_alarm_set_alarm__["a" /* SetAlarmPage */], {
            destination: this.destination
        });
    };
    HomePage.prototype.vibrate = function () {
        this.vibration.vibrate(3000);
    };
    HomePage.prototype.loadMap = function () {
        var location = new __WEBPACK_IMPORTED_MODULE_2_ionic_native__["d" /* GoogleMapsLatLng */](-34.9290, 138.6010);
        this.map = new __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* GoogleMap */]('map', {
            'backgroundColor': '#4DC68F',
            'controls': {
                'compass': true,
                'myLocationButton': true,
                'indoorPicker': true,
                'zoom': true
            },
            'gestures': {
                'scroll': true,
                'tilt': true,
                'rotate': true,
                'zoom': true
            },
            'camera': {
                'latLng': location,
                'zoom': 15.4,
                'bearing': 50,
                'tilt': 30
            }
        });
        this.map.on(__WEBPACK_IMPORTED_MODULE_2_ionic_native__["c" /* GoogleMapsEvent */].MAP_READY).subscribe(function () {
            console.log('Map is ready!');
        });
    };
    HomePage.prototype.checkdistance = function () {
        var lat1;
        var lon1;
        var temp = this.destination.split(",");
        var lat2 = temp[0];
        var lon2 = temp[1];
        this.geolocation.getCurrentPosition().then(function (resp) {
            lat1 = resp.coords.latitude;
            lon1 = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        if (this.getDistance(lat1, lon1, lat2, lon2) <= 1.60934) {
            this.vibration.vibrate(10000);
        }
    };
    HomePage.prototype.getDistance = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    };
    HomePage.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'pafe-home',template:/*ion-inline-start:"/Users/Gio/IonicProjects/Test2/src/pages/home/home.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content style= "background-color: #4DC68F !important;">\n  <ion-searchbar (search)="setAlarm()" [(ngModel)] = "destination" placeholder="Set your destination" autocomplete= "on"></ion-searchbar>\n  <div id="map" style= "height: 87.5%"  ></div>\n</ion-content>\n'/*ion-inline-end:"/Users/Gio/IonicProjects/Test2/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetAlarmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_vibration__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__active_active__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_geolocation__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { LocationTracker } from '../../providers/location-tracker/location-tracker';

/**
 * Generated class for the SetAlarmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SetAlarmPage = (function () {
    function SetAlarmPage(backgroundGeolocation, vibration, alertCtrl, navCtrl, navParams, platform, geolocation) {
        this.backgroundGeolocation = backgroundGeolocation;
        this.vibration = vibration;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.geolocation = geolocation;
        this.radius = 100;
        this.platform.ready().then(function () {
            __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Geofence */].initialize().then(function () { return console.log('Geofence Plugin Ready'); }, function (err) { return console.log(err); });
        });
    }
    SetAlarmPage.prototype.setGeofence = function (value) {
        var _this = this;
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true
        }).then(function (resp) {
            var longitude = -118.295311;
            var latitude = 34.017542;
            var radius = value;
            var fence = {
                id: "myGeofenceID1",
                latitude: latitude,
                longitude: longitude,
                radius: radius,
                transitionType: 1
            };
            __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Geofence */].addOrUpdate(fence).then(function () { return _this.success = true; }, function (err) { return _this.error = "Failed to add or update the fence."; });
            __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Geofence */].onTransitionReceived().subscribe(function (resp) {
                _this.vibration.vibrate(3000);
                __WEBPACK_IMPORTED_MODULE_3_ionic_native__["e" /* SMS */].send('3239897826', 'Your stop is in close proximity!!!');
            });
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__active_active__["a" /* ActivePage */]);
        }).catch(function (error) {
            _this.error = error;
        });
        this.destination = this.navParams.get('destination');
        this.miles = "One Mile";
    };
    //  start(){
    //   this.locationTracker.startTracking();
    // }
    //
    // stop(){
    //   this.locationTracker.stopTracking();
    // }
    SetAlarmPage.prototype.checkdistance = function () {
        var lat1;
        var lon1;
        var temp = this.destination.split(",");
        var lat2 = temp[0];
        var lon2 = temp[1];
        this.geolocation.getCurrentPosition().then(function (resp) {
            lat1 = resp.coords.latitude;
            lon1 = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        if (this.getDistance(lat1, lon1, lat2, lon2) <= 1.60934) {
            this.vibration.vibrate(10000);
        }
        else {
            console.log(lat2);
        }
    };
    SetAlarmPage.prototype.getDistance = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    };
    SetAlarmPage.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    SetAlarmPage.prototype.showConfirm = function () {
        var confirm = this.alertCtrl.create({
            title: 'You have set your alarm!',
            message: '',
            buttons: [
                {
                    text: 'Close',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    SetAlarmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SetAlarmPage');
    };
    return SetAlarmPage;
}());
SetAlarmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-set-alarm',template:/*ion-inline-start:"/Users/Gio/IonicProjects/Test2/src/pages/set-alarm/set-alarm.html"*/'<!--\n  Generated template for the SetAlarmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color ="good" >\n    <ion-title>SetAlarm</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style= "background-color: #f4f4f4 !important;" padding class="page">\n\n  <ion-card color ="good">\n    <ion-card-header style= "text-align: center">\n      <b><h2>Your destination is</h2></b>\n    <br/><b>{{destination}}</b>\n  </ion-card-header>\n\n    <ion-card-header style= "text-align: center ">\n      <b><h2>Set alarm</h2></b>\n      <ion-item color ="good">\n    <ion-select [(ngModel)]="miles" style= "\n    margin: auto;\n    width: 100%;\n    padding: 5px;">\n      <ion-option value="One Mile"><b>One mile</b></ion-option>\n      <ion-option value="Two Miles">Two miles</ion-option>\n    </ion-select>\n  </ion-item>\n      <br/><b><h2>Before arriving to your <br/>destination</h2></b>\n    </ion-card-header>\n\n    <ion-card-content>\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-buttons text-center>\n    <button color ="good" ion-button (click)="showConfirm()" block>Set Alarm</button>\n  </ion-buttons>\n  <!-- <div class="loader"></div> -->\n\n  <div class="bottom-container">\n    <ion-item>\n      <ion-range [(ngModel)]="radius" #radiusVal min="40" max="300" color="primary" pin="true" snaps="true" step="20">\n      </ion-range>\n    </ion-item>\n    <ion-label color="secondary" id="lbl">Fence Parameter (Meters)</ion-label>\n    <button ion-button large outline block (click)="setGeofence(radiusVal.value)" id="cta" color="primary">Set Geofence</button>\n\n    <p *ngIf="error">{{ error }}</p>\n\n  </div>\n\n<!-- <button ion-button (click)="checkdistance()">\n  hi\n</button> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/Gio/IonicProjects/Test2/src/pages/set-alarm/set-alarm.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], SetAlarmPage);

//# sourceMappingURL=set-alarm.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivePage = (function () {
    function ActivePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ActivePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivePage');
    };
    ActivePage.prototype.removeFence = function () {
        __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Geofence */].removeAll();
        this.navCtrl.popToRoot();
    };
    return ActivePage;
}());
ActivePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-active',template:/*ion-inline-start:"/Users/Gio/IonicProjects/Test2/src/pages/active/active.html"*/'<!--\n  Generated template for the ActivePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>active</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page">\n  <div class="loader"></div>\n\n  <div class="bottom-container">\n      <ion-label color="secondary" id="lbl">MONITORING CURRENTLY ACTIVATED</ion-label>\n    <button ion-button large outline block (click)="removeFence()" id="cta" color="primary">Stop Alert</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Gio/IonicProjects/Test2/src/pages/active/active.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ActivePage);

//# sourceMappingURL=active.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(396);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_set_alarm_set_alarm__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_active_active__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_vibration__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_background_geolocation__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_set_alarm_set_alarm__["a" /* SetAlarmPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_active_active__["a" /* ActivePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_set_alarm_set_alarm__["a" /* SetAlarmPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_active_active__["a" /* ActivePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, geolocation) {
        this.geolocation = geolocation;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Gio/IonicProjects/Test2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Gio/IonicProjects/Test2/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[391]);
//# sourceMappingURL=main.js.map