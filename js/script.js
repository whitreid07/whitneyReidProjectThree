//store in the different variable; maybe choices/results
//each set of questions will have a result to each answer

let personalityQuiz = {
  questions: [
    {
      // title: "What's your personality type?",
      answers: [
        {
          // answer: "Im powerful and silly",
          result: "cardiB"
        },
        {
          // answer: "Ambitious and fierce",
          result: "beyonce"
        },
        {

          // answer: "Arrogant, but charming",
          result: "kanye"
        },
      ]
    },
    {
      title: "Pick a colour that represents you",
      answers: [
        {
          // answer: "red",
          result: "cardiB"
        },
        {
          // answer: "purple",
          result: "beyonce"
        },
        {
          // answer: "blue",
          result: "Kanye",
        },
      ]
    },
  ],
}

// questions, results, and personality descriptions
//four celebrities
// results: ["CardiB", "Beyonce", "Kanye"],

const descriptions = [
  {

    //Cardi B
    celebrity: "Cardi B",
    celebrityDescription: "You're a powerful, confident badass who turns heads any time you walk in a room. You have a natural charm that people gravitate towards — once you've hooked them in, they don't want to escape!",
    image: "https://media.giphy.com/media/3o751Yxe9UjX26BZbG/giphy.gif"
  },
  {
    //Beyonce 
    celebrity: "Beyonce",
    celebrityDescription: "You're a fierce, ambitious person with a kind heart. You never give up on your friends, and you always stick by the ones you love.",
    image: "https://media.giphy.com/media/niKJy6zNnyNpK/giphy.gif"
  },

  {
    //Kanye West 
    celebrity: "Kanye West",
    celebrityDescription: "You like to be the center of attention, but that's only because you see the world in a unique way and want to share it with others.",
    image: "https://media.giphy.com/media/9qvkhbHg3NOKI/giphy.gif"
  },
  {
    //Wild Card
    celebrity: "Wild Card",
    celebrityDescription: " Oh, looks like you got the wild choice.",
    image: "https://media.giphy.com/media/l3q2B4Mlsw4HFpVE4/giphy.gif"

  }

]



//wait for the document to be ready
$(document).ready(function () {

  //When button is click move 100vh to next question
  $('.headerButton').on('click', function () {
    $('html, body').animate({
      scrollTop: $(".sectionOneContainer").offset().top
    }, 1000);
  });
  $('.sectionOneButton').on('click', function () {
    $('html, body').animate({
      scrollTop: $(".sectionTwoContainer").offset().top
    }, 1000);
  });
  $('.submitContainer').on('click', function () {
    $('html, body').animate({
      scrollTop: $(".sectionThreeContainer").offset().top
    }, 1000);
  });

  //when the form submits (add an event listener/when enter is pressed)
  $('form').on('submit', function (event) {
    event.preventDefault();
    // console.log('submit')


    //find the users choice (multiple choice) as variables using jquery's .val()
    //save the users choice as variables
    const userPersonalityType = $('input[name="personalityType"]:checked').val();
    const userColourType = $('input[name ="colourType"]:checked').val();
    console.log(userPersonalityType);
    console.log(userColourType);

    //select appropriate array from questions object based on user choice
    const userChoice = [];

    userChoice.push(userPersonalityType, userColourType);
    console.log(userChoice);

    // const celebrityArray = personalityQuiz[userPersonalityType];
    // console.log(celebrityArray);

    //check the user's choices array for the most frequent string
    //find the highest occurence in responses using for loop; use conditions

    let cardiB = 0
    let beyonce = 0
    let kanye = 0


    for (i = 0; i < userChoice.length; i++) {

      console.log(userChoice[i]);
      //
      if (userChoice[i] === 'cardiB') {
        cardiB++
        // userChoice.append(celebrityArray[i].descriptions);
      }
      else if (userChoice[i] === 'beyonce') {
        beyonce++
        // userChoice.append(celebrityArray[i].descriptions);
      }
      else if (userChoice[i] === 'kanye') {
        kanye++
        // userChoice.append(celebrityArray[i].descriptions);
      }
    }

    console.log(cardiB, beyonce, kanye);

    //use frequent string from the array, search the people array to find matching celebrity

    if (cardiB > beyonce && cardiB > kanye) {
      // descriptions = 0;
      //you get cardiB
      // console.log(descriptionsObject.cardiB);
      // print title of celebrity image onto the page
      $('.sectionThreeContainer').html(`<h2>${descriptions[0].celebrity}</h2>
                                        <p>${descriptions[0].celebrityDescription}</p>
                                        <img src=${descriptions[0].image} />`);
    }
    else if (beyonce > cardiB && beyonce > kanye) {
      // descriptions = 1;
      // console.log(descriptionsObject.beyonce);
      $('.sectionThreeContainer').html(`<h2>${descriptions[1].celebrity}</h2>
                                        <p>${descriptions[1].celebrityDescription}</p>
                                        <img src=${descriptions[1].image} />`);
    }
    else if (kanye > cardiB && kanye > beyonce) {
      $('.sectionThreeContainer').html(`<h2> ${descriptions[2].celebrity}</h2>
                                        <p>${descriptions[2].celebrityDescription}</p>
                                        <img src=${descriptions[2].image} />`);
    }
    else {
      // console.log(descriptionsObject.default);
      $('.sectionThreeContainer').html(`<h2> ${descriptions[3].celebrity}</h2>
                                        <p>${descriptions[3].celebrityDescription}</p>
                                        <img src=${descriptions[3].image} />`);
    }

  });
});

