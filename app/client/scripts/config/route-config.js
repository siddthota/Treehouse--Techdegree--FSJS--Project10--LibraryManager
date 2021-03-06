(function() {
  'use strict';
     angular
       .module('app')
       .config(['$routeProvider', config]);
    
     function config($routeProvider) {
       $routeProvider
         .when('/', {
           controller: '',
           controllerAs: 'vm',
           templateUrl: '/views/home.html'
         })
          .when('/books', {
            controller: 'bookController',
            controllerAs: 'vm',
            templateUrl: '/views/all_books.html'
          })
          .when('/loans', {
            controller: 'loanController',
            controllerAs: 'vm',
            templateUrl: '/views/all_loans.html'
          })
          .when('/patrons', {
            controller: 'patronController',
            controllerAs: 'vm',
            templateUrl: '/views/all_patrons.html'
         })
         .when('/books/:id', {
           controller: 'bookController',
           controllerAs: 'vm',
           templateUrl: '/views/book_detail.html'
         })
         .when('/overdue_books', {
           controller: 'bookController',
           controllerAs: 'vm',
           templateUrl: '/views/overdue_books.html'
         })
         .when('/checked_out_books', {
           controller: 'bookController',
           controllerAs: 'vm',
           templateUrl: '/views/checked_books.html'
         })
         .when('/overdue_loans', {
           controller: 'loanController',
           controllerAs: 'vm',
           templateUrl: '/views/overdue_loans.html'
         })
         .when('/patrons/:id', {
           controller: 'patronController',
           controllerAs: 'vm',
           templateUrl: '/views/patron_detail.html'
        })
         .when('/new_book', {
           controller: 'bookController',
           controllerAs: 'vm',
           templateUrl: '/views/new_book.html'
         })
         .when('/new_loan', {
           controller: 'loanController',
           controllerAs: 'vm',
           templateUrl: '/views/new_loan.html'
         })
         .when('/checked_out_loans', {
           controller: 'loanController',
           controllerAs: 'vm',
           templateUrl: '/views/checked_loans.html'
         })
         .when('/new_patron', {
           controller: 'patronController',
           controllerAs: 'vm',
           templateUrl: '/views/new_patron.html'
         })
         .when('/return/:id', {
           controller: 'loanController',
           controllerAs: 'vm',
           templateUrl: '/views/return_book.html'
         })
         .otherwise({
           redirectTo: '/'
         });
     }
})();
