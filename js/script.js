//store in the different variable; maybe choices/results
let personalityQuiz = {
  questions: [
    {
      title: "What's your personality type?",
      answers: [
        {
          answer: "Im powerful and silly",
          result: "Cardi B"
        },
        {
          answer: "Arrogant, but charming",
          result: "Kanye"
        },
        {
          answer: "Ambitious and fierce",
          result: "Beyonce"
        },
      ]
    },
    {
      title: "Pick a colour that represents you",
      answers: [
        {
          answer: "red",
          result: "Cardi B"
        },
        {
          answer: "purple",
          result: "Beyonce"
        },
        {
          answer: "blue",
          result: "Kanye"
        },
      ]
    },
  ],
}

//wait for the document to be ready
$(document).ready(function () {

  //when the form submits (add an event listener/when enter is pressed)
  //find the users choices (multiple choice) )using jquery's .val()
  //save the users choice in the userChoices array
  //check the user's choices array for the most frequent string

  // questions, results, and personality descriptions
  //four celebrities
  results: ["Cardi B", "Beyonce", "Kanye"],

    descriptions: [
      //Cardi B
      "Cardi B \n You're a powerful, confident badass who turns heads any time you walk in a room. You have a natural charm that people gravitate towards — once you've hooked them in, they don't want to escape!",

      //Beyonce 
      "Beyonce \n You're a fierce, ambitious person with a kind heart. You never give up on your friends, and you always stick by the ones you love.",

      //Kanye West 
      "Kanye West \n Extremely intelligent and very smart, there's a whole lot more to you then some people realize. Being different doesn't scare you. You love to be the center of attention.",
    ]
});
  //select appropriate array from questions object based on user choice
  //find the highest occurence in responses using for loop; use conditions
  //use frequent string from the array, search the people array to find matching celebrity
  // print title of celebrity image onto the page
//create an array of questions, answers and results in an array within object
//each set of questions will have a result to each answer
