surveybot.controller('ComputerQuestionCtrl', function ComputerQuestionCtrl($scope, QuestionsFactory) {
  $scope.questions = QuestionsFactory.questions;
  $scope.QuestionsFactory = QuestionsFactory;
});
