//store in the different variable; maybe choices/results
//each set of questions will have a result to each answer

let personalityQuiz = {
  questions: [
    {
      title: "What's your personality type?",
      answers: [
        {
          answer: "Im powerful and silly",
          result: "cardiB"
        },
        {
          answer: "Arrogant, but charming",
          result: "kanye"
        },
        {
          answer: "Ambitious and fierce",
          result: "beyonce"
        },
      ]
    },
    {
      title: "Pick a colour that represents you",
      answers: [
        {
          answer: "red",
          result: "cardiB"
        },
        {
          answer: "purple",
          result: "beyonce"
        },
        {
          answer: "blue",
          result: "Kanye",
        },
      ]
    },
  ],
}

// questions, results, and personality descriptions
//four celebrities
// results: ["CardiB", "Beyonce", "Kanye"],

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

  //when the form submits (add an event listener/when enter is pressed)
  $('form').on('submit', function (event) {
    event.preventDefault();
    // console.log('submit')

    //find the users choice (multiple choice) as variables using jquery's .val()
    //save the users choice as variables
    const userPersonalityType = $('input[name="personalityType"]:checked').val();
    const userColourType = $('input[name ="colourType"]:checked').val();
    // console.log(userColourType);

    //select appropriate array from questions object based on user choice

    const celebrityArray = personalityQuiz[userPersonalityType];
    console.log(celebrityArray);


    //check the user's choices array for the most frequent string
    //find the highest occurence in responses using for loop; use conditions

    let cardiB = 0
    let beyonce = 0
    let kanye = 0

    const userChoice = [];

    for (i = 0; i < celebrityArray.length; i++) {
      if (userPersonalityType[i] === 'cardiB' && userColourType[i] === 'cardiB') {
        cardiB++ ,
          userChoice.append(celebrityArray[i].descriptions);
      }
      else if (userPersonalityType[i] === 'beyonce' && userColourType[i] === 'beyonce') {
        beyonce++ ,
          userChoice.append(celebrityArray[i].descriptions);;
      }
      else if (userPersonalityType[i] === 'kanye' && userColourType[i] === 'kanye') {
        kanye++ ,
          userChoice.append(celebrityArray[i].descriptions);
      }
    }

    //use frequent string from the array, search the people array to find matching celebrity

    if (cardiB > beyonce && cardi > kanye) {
      descriptions = 0;
    }

    if (beyonce > cardiB && beyonce > kanye) {
      descriptions = 1;
    }

    if (kanye > beyonce && kanye > cardiB) {
      descriptions = 2;
    }

    // print title of celebrity image onto the page
    // $('.results').html(`${}`);

  });
});

