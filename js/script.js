const answers = [];
$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'What is noted to make part of your routine?',
      'options': [
        'Updating your status',
        'Looping in Resource Manager'
      ],
      'correctIndex': 0,
      'correctResponse': 'Correct Answer. Great Job!',
      'incorrectResponse': 'Wrong Answer, your status should always be to date. Pay closer attention at our meetings!'
    },
    {
      'q': 'What should be done before you leave everyday',
      'options': [
        'Check-in with Resource Manager',
        'Complete Timesheets',
        'Reviewing dashboard to ensure all tasks for the day are completed.'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct Answer!',
      'incorrectResponse': 'oh no! Wrong Answer, you should always review your dashboard to ensure all work is completed'
    },
    {
      'q': 'When receving a new task, what should you do?',
      'options': [
        'Re-prioritize your workload',
        'Mark task started'
      ],
      'correctIndex': 1,
      'correctResponse': 'You\'re a genius! Correct Answer',
      'incorrectResponse': 'Good Try, you should always mark your tasks started'
    },
    {
      'q': 'Should proddev and staging files always be sync\'ed?',
      'options': [
        'Yes',
        'Sometimes',
        'No'
      ],
      'correctIndex': 0,
      'correctResponse': 'Correct Answerr!',
      'incorrectResponse': 'Wrong! Proddev and Staging should always match'
    }
  ],
  finishCallback: () => {
  	$('.js-quiz-submit').show();
  	console.log(answers)
  },
  answerCallback: (questionNumber, isCorrect) => {
  	answers.push(isCorrect);
  }
});

 $(".collapse-card").paperCollapse();

$(document).ready(function(){
    $(".js-submit").click(function(){
        $(".js-quiz-submit").hide();
    });
});

const Airtable = require('airtable')
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyOWMAqZinKYLBZ8'
});
const base = Airtable.base('appJpzI0JJrgMV8rq');

 $('.js-submit').on('click', e => {
 	e.preventDefault();
 	const userName = $('.js-name').val();

	base('Table 1').create({
		'Name': userName,
		'Results': answers.toString(),
	}, function(err, record) {
		if (err) { console.error(err); return; }
		console.log(record.getId());
		// TODO: print out to the HTML page that quiz has been submitted...
	});
 })
const form = document.querySelector("js-quiz-submit").value = "";
form.reset();