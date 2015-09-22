surveybot.controller('ResultsCtrl', function ResultsCtrl($scope, QuestionsFactory) {
  $scope.questions = QuestionsFactory.questions;
  $scope.QuestionsFactory = QuestionsFactory;
});
