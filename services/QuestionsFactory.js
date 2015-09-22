surveybot.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [{question: "Do you use laptop or desktop?", answerLaptop: 0, answerDesktop: 0}, {question: "Are you a cat person or dog person?", answerCat: 0, answerDog: 0}];

  factory.countAnswer = function(answer) {
    if (answer === "laptop") {
      factory.questions[0].answerLaptop ++;
    } else if (answer === "desktop") {
      factory.questions[0].answerDesktop ++;
    } else if (answer === "cat") {
      factory.questions[1].answerCat ++;
    } else if (answer === "dog") {
      factory.questions[1].answerDog ++;
    }
  };

  return factory;
});
