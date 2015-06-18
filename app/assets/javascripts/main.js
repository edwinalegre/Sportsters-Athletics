angular.module('sportsterApp', ['ngResource'])
  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] =
      $('meta[name=csrf-token]').attr('content');
  })
  .controller('sportsterController', function sportsController($scope, $http, $resource){
    var sports = this;

    var Sportster = $resource('/api/sportsters/:id', {id:'@id'},
        {
          'update': { method: 'patch' }
        }
      );

    Sportster.query(function(data){
      $scope.sportsters = data
    });



    // sports.list = [
    //   {firstname: 'Noah', lastname: 'Alegre', photo: 'https://saladly-ea-wdi.s3.amazonaws.com/uploads/sportster/profile_image/54c6bb943237620003020000/small_10340013_10203196155317128_1571200417375562606_n.jpg', division: 'Minors I', team: 'Warriors', year: 2014, sport: 'Basketball'},
    //   {firstname: 'Leila', lastname: 'Alegre', photo: 'https://saladly-ea-wdi.s3.amazonaws.com/uploads/sportster/profile_image/54c6bb943237620003020000/small_10340013_10203196155317128_1571200417375562606_n.jpg', division: 'PeeWee', team: 'Dodgers', year: 2013, sport: 'Baseball'},
    //   {firstname: 'Shawn', lastname: 'Bautista', photo: 'https://saladly-ea-wdi.s3.amazonaws.com/uploads/sportster/profile_image/54c6bb943237620003020000/small_10340013_10203196155317128_1571200417375562606_n.jpg', division: 'Minors II', team: 'Spain', year: 2013, sport: 'Soccer'},
    //   {firstname: 'Angeli', lastname: 'Jugao', photo: 'https://saladly-ea-wdi.s3.amazonaws.com/uploads/sportster/profile_image/54c6bb943237620003020000/small_10340013_10203196155317128_1571200417375562606_n.jpg', division: 'PeeWee', team: 'AC Milan', year: 2014, sport: 'Soccer'},
    //   {firstname: 'Alyssa', lastname: 'Jugao', photo: 'https://saladly-ea-wdi.s3.amazonaws.com/uploads/sportster/profile_image/54c6bb943237620003020000/small_10340013_10203196155317128_1571200417375562606_n.jpg', division: 'Girls', team: 'Lakers', year: 2015, sport: 'Basketball'},
    // ];

  });