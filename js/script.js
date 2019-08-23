//store in the different variable; maybe choices/results
//each set of questions will have a result to each answer

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

// questions, results, and personality descriptions
//four celebrities
results: ["CardiB", "Beyonce", "Kanye"],

  descriptions = [
    {

      //Cardi B
      celebrity: "Cardi B \n You're a powerful, confident badass who turns heads any time you walk in a room. You have a natural charm that people gravitate towards — once you've hooked them in, they don't want to escape!"
    },
    {
      //Beyonce 
      celebrity: "Beyonce \n You're a fierce, ambitious person with a kind heart. You never give up on your friends, and you always stick by the ones you love."
    },

    {
      //Kanye West 
      celebrity: "Kanye West \n Extremely intelligent and very smart, there's a whole lot more to you then some people realize. Being different doesn't scare you. You love to be the center of attention."
    }
  ]




//wait for the document to be ready
$(document).ready(function () {



  //check the user's choices array for the most frequent string


  //find the highest occurence in responses using for loop; use conditions

  // const filteredArray = [];
  // for (let i = 0; i < drinkArray.length; i++) {
  //   // console.log(userPrice);
  //   // console.log(drinkArray[i].price);
  //   if (userPrice === drinkArray[i].price) {
  //     //push selected cafes into filtered array
  //     filteredArray.push(drinkArray[i].title);

  //   }
  // }

  $('form').on('submit', function (event) {
    event.preventDefault();
    console.log('submit')
    //find the users choices (multiple choice) as variables using jquery's .val()
    //find the users choices
    //save the users choice as variables
    const userInput = [];

    let cardiB = 0
    let beyonce = 0
    let kanye = 0

    //for each item in the array find out if it matches the user's choice
    const userChoice = [];
    for (i = 0; i < userChoice.length; i++) {
      if (userChoice[i] === 'cardiB') {
        cardiB++
      }
      if (userChoice[i] === 'Beyonce') {
        beyonce++
      }
      if (userChoice[i] === 'Kanye') {
        kanye++
      }
    }

    // select appropriate array from drinks object based on user choice

    if (cardiB > beyonce && cardi > kanye) {
      //do something!
    }

    if (cardiB < beyonce && cardi < kanye) {
      //do something!
    }

    if (cardiB > beyonce && cardi < kanye) {
      //do something!
    }
    if (cardiB < beyonce && cardi > kanye) {
      //do something!
    }


    // const userChoice = personalityQuiz[userChoice];
    userInput.push('input:checked').val();
    console.log(userChoice);

  });

});
//use frequent string from the array, search the people array to find matching celebrity
//when the form submits (add an event listener/when enter is pressed)


  // print title of celebrity image onto the page
//create an array of questions, answers and results in an array within object
