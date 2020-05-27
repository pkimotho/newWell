(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-routing-module-ngfactory"],{

/***/ "./src/app/home/home.routing.module.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/home/home.routing.module.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: HomeRoutingModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModuleNgFactory", function() { return HomeRoutingModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.routing.module */ "./src/app/home/home.routing.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _landing_landing_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component.ngfactory */ "./src/app/home/landing/landing.component.ngfactory.js");
/* harmony import */ var _artist_profile_artist_profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artist-profile/artist-profile.component.ngfactory */ "./src/app/home/artist-profile/artist-profile.component.ngfactory.js");
/* harmony import */ var _artist_profile_artist_edit_profile_artist_edit_profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./artist-profile/artist-edit-profile/artist-edit-profile.component.ngfactory */ "./src/app/home/artist-profile/artist-edit-profile/artist-edit-profile.component.ngfactory.js");
/* harmony import */ var _artists_page_artists_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./artists-page/artists-page.component.ngfactory */ "./src/app/home/artists-page/artists-page.component.ngfactory.js");
/* harmony import */ var _artist_signup_artist_signup_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./artist-signup/artist-signup.component.ngfactory */ "./src/app/home/artist-signup/artist-signup.component.ngfactory.js");
/* harmony import */ var _artist_complete_profile_artist_complete_profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./artist-complete-profile/artist-complete-profile.component.ngfactory */ "./src/app/home/artist-complete-profile/artist-complete-profile.component.ngfactory.js");
/* harmony import */ var _comingsoon_comingsoon_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comingsoon/comingsoon.component.ngfactory */ "./src/app/home/comingsoon/comingsoon.component.ngfactory.js");
/* harmony import */ var _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component.ngfactory */ "./src/app/home/login/login.component.ngfactory.js");
/* harmony import */ var _pricing_pricing_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pricing/pricing.component.ngfactory */ "./src/app/home/pricing/pricing.component.ngfactory.js");
/* harmony import */ var _publishing_publishing_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./publishing/publishing.component.ngfactory */ "./src/app/home/publishing/publishing.component.ngfactory.js");
/* harmony import */ var _marketing_marketing_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./marketing/marketing.component.ngfactory */ "./src/app/home/marketing/marketing.component.ngfactory.js");
/* harmony import */ var _fan_signup_fan_signup_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fan-signup/fan-signup.component.ngfactory */ "./src/app/home/fan-signup/fan-signup.component.ngfactory.js");
/* harmony import */ var _terms_terms_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./terms/terms.component.ngfactory */ "./src/app/home/terms/terms.component.ngfactory.js");
/* harmony import */ var _faq_faq_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./faq/faq.component.ngfactory */ "./src/app/home/faq/faq.component.ngfactory.js");
/* harmony import */ var _about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about/about.component.ngfactory */ "./src/app/home/about/about.component.ngfactory.js");
/* harmony import */ var _policy_policy_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./policy/policy.component.ngfactory */ "./src/app/home/policy/policy.component.ngfactory.js");
/* harmony import */ var _whatwedo_whatwedo_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./whatwedo/whatwedo.component.ngfactory */ "./src/app/home/whatwedo/whatwedo.component.ngfactory.js");
/* harmony import */ var _password_rest_password_rest_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./password-rest/password-rest.component.ngfactory */ "./src/app/home/password-rest/password-rest.component.ngfactory.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/home/landing/landing.component.ts");
/* harmony import */ var _artist_profile_artist_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./artist-profile/artist-profile.component */ "./src/app/home/artist-profile/artist-profile.component.ts");
/* harmony import */ var _artist_profile_artist_edit_profile_artist_edit_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./artist-profile/artist-edit-profile/artist-edit-profile.component */ "./src/app/home/artist-profile/artist-edit-profile/artist-edit-profile.component.ts");
/* harmony import */ var _artists_page_artists_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./artists-page/artists-page.component */ "./src/app/home/artists-page/artists-page.component.ts");
/* harmony import */ var _artist_signup_artist_signup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./artist-signup/artist-signup.component */ "./src/app/home/artist-signup/artist-signup.component.ts");
/* harmony import */ var _artist_complete_profile_artist_complete_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./artist-complete-profile/artist-complete-profile.component */ "./src/app/home/artist-complete-profile/artist-complete-profile.component.ts");
/* harmony import */ var _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./comingsoon/comingsoon.component */ "./src/app/home/comingsoon/comingsoon.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./login/login.component */ "./src/app/home/login/login.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/home/pricing/pricing.component.ts");
/* harmony import */ var _publishing_publishing_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./publishing/publishing.component */ "./src/app/home/publishing/publishing.component.ts");
/* harmony import */ var _marketing_marketing_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./marketing/marketing.component */ "./src/app/home/marketing/marketing.component.ts");
/* harmony import */ var _fan_signup_fan_signup_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./fan-signup/fan-signup.component */ "./src/app/home/fan-signup/fan-signup.component.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/home/terms/terms.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/home/faq/faq.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./about/about.component */ "./src/app/home/about/about.component.ts");
/* harmony import */ var _policy_policy_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./policy/policy.component */ "./src/app/home/policy/policy.component.ts");
/* harmony import */ var _whatwedo_whatwedo_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./whatwedo/whatwedo.component */ "./src/app/home/whatwedo/whatwedo.component.ts");
/* harmony import */ var _password_rest_password_rest_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./password-rest/password-rest.component */ "./src/app/home/password-rest/password-rest.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








































var HomeRoutingModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _landing_landing_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["LandingComponentNgFactory"], _artist_profile_artist_profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ArtistProfileComponentNgFactory"], _artist_profile_artist_edit_profile_artist_edit_profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ArtistEditProfileComponentNgFactory"], _artists_page_artists_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ArtistsPageComponentNgFactory"], _artist_signup_artist_signup_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ArtistSignupComponentNgFactory"], _artist_complete_profile_artist_complete_profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ArtistCompleteProfileComponentNgFactory"], _comingsoon_comingsoon_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ComingsoonComponentNgFactory"], _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["LoginComponentNgFactory"], _pricing_pricing_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["PricingComponentNgFactory"], _publishing_publishing_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["PublishingComponentNgFactory"], _marketing_marketing_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["MarketingComponentNgFactory"], _fan_signup_fan_signup_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["FanSignupComponentNgFactory"], _terms_terms_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["TermsComponentNgFactory"], _faq_faq_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["FaqComponentNgFactory"], _about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["AboutComponentNgFactory"], _policy_policy_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["PolicyComponentNgFactory"], _whatwedo_whatwedo_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["WhatwedoComponentNgFactory"], _password_rest_password_rest_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["PasswordRestComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_21__["ROUTES"], function () { return [[{ path: "", component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_22__["LandingComponent"] }, { path: "artist/:id", component: _artist_profile_artist_profile_component__WEBPACK_IMPORTED_MODULE_23__["ArtistProfileComponent"] }, { path: "artist/:id/edit", component: _artist_profile_artist_edit_profile_artist_edit_profile_component__WEBPACK_IMPORTED_MODULE_24__["ArtistEditProfileComponent"] }, { path: "artists", component: _artists_page_artists_page_component__WEBPACK_IMPORTED_MODULE_25__["ArtistsPageComponent"] }, { path: "artist-signup", component: _artist_signup_artist_signup_component__WEBPACK_IMPORTED_MODULE_26__["ArtistSignupComponent"] }, { path: "artist-complete-profile", component: _artist_complete_profile_artist_complete_profile_component__WEBPACK_IMPORTED_MODULE_27__["ArtistCompleteProfileComponent"] }, { path: "song", component: _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_28__["ComingsoonComponent"] }, { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"] }, { path: "pricing", component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_30__["PricingComponent"] }, { path: "publishing", component: _publishing_publishing_component__WEBPACK_IMPORTED_MODULE_31__["PublishingComponent"], loadChildren: "./publishing/publishing.module#PublishingModule" }, { path: "marketing", component: _marketing_marketing_component__WEBPACK_IMPORTED_MODULE_32__["MarketingComponent"] }, { path: "signup", component: _fan_signup_fan_signup_component__WEBPACK_IMPORTED_MODULE_33__["FanSignupComponent"] }, { path: "terms", component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_34__["TermsComponent"] }, { path: "faq", component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_35__["FaqComponent"] }, { path: "about", component: _about_about_component__WEBPACK_IMPORTED_MODULE_36__["AboutComponent"] }, { path: "policy", component: _policy_policy_component__WEBPACK_IMPORTED_MODULE_37__["PolicyComponent"] }, { path: "whatwedo", component: _whatwedo_whatwedo_component__WEBPACK_IMPORTED_MODULE_38__["WhatwedoComponent"] }, { path: "password_reset", component: _password_rest_password_rest_component__WEBPACK_IMPORTED_MODULE_39__["PasswordRestComponent"] }]]; }, [])]); });



/***/ })

}]);
//# sourceMappingURL=home-home-routing-module-ngfactory.js.map