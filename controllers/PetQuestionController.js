surveybot.controller('PetQuestionCtrl', function PetQuestionCtrl($scope, QuestionsFactory) {
  $scope.questions = QuestionsFactory.questions;
  $scope.QuestionsFactory = QuestionsFactory;
});
