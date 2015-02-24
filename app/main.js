var app = angular.module('flamencoApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "app/components/pages/home.html", controller: "PageCtrl"})
    // Pages
    .when("/features", {templateUrl: "app/components/pages/features.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "app/components/pages/faq.html", controller: "PageCtrl"})
    .when("/download", {templateUrl: "app/components/pages/download.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "app/components/pages/contact.html", controller: "PageCtrl"})
    // Blog
    // .when("/blog", {templateUrl: "app/components/pages/blog.html", controller: "BlogCtrl"})
    // .when("/blog/post", {templateUrl: "app/components/pages/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "app/components/pages/404.html", controller: "PageCtrl"});

    $locationProvider.html5Mode(true);
}]);

/**
 * Controls the Blog
 */
// app.controller('BlogCtrl', function ( $scope, $location, $http ) {
//   console.log("Blog Controller reporting for duty.");
// });

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});


app.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.gotoBotton = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('contact');

      // call $anchorScroll()
      $anchorScroll();
    };
}]);
