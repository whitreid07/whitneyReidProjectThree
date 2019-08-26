
//create object array to hold questions prompted to the user
//each set of questions will have a result to each answer

let personalityQuiz = {
  questions: [
    {
      answers: [
        {
          result: "cardiB"
        },
        {
          result: "beyonce"
        },
        {
          result: "kanye"
        },
      ]
    },
    {
      title: "Pick a colour that represents you",
      answers: [
        {
          result: "cardiB"
        },
        {
          result: "beyonce"
        },
        {
          result: "kanye",
        },
      ]
    },
  ],
}
//this object array will hold the desciption/gifs of each celebrity
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
    celebrityDescription: "You're a fierce, ambitious person with a kind heart. You never give up on your dreams, and you always stick by the ones you love no matter what!",
    image: "https://media.giphy.com/media/niKJy6zNnyNpK/giphy.gif"
  },

  {
    //Kanye West 
    celebrity: "Kanye West",
    celebrityDescription: "You like to be the center of attention, but that's only because you see the world in a unique way.",
    image: "https://media.giphy.com/media/9Xh1CGm4Hzo4g/giphy.gif"
  },
  {
    //Wild
    celebrity: "Wild",
    celebrityDescription: " Hmmmm, looks like you got the wild option. No celebrity match, try the quiz again!",
    image: "https://media.giphy.com/media/l3q2B4Mlsw4HFpVE4/giphy.gif"
  }
]

//wait for the document to be ready
$(document).ready(function () {

  //When button is click move 100vh to next question; do this for each button
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
    $(`.alert`).remove();

    //select appropriate array from questions object based on user choice
    const userChoice = [];

    userChoice.push(userPersonalityType, userColourType);

    // declare variables to set counter
    let cardiB = 0
    let beyonce = 0
    let kanye = 0


    //find the highest occurence in responses using for loop; use conditions
    for (i = 0; i < userChoice.length; i++) {

      if (userChoice[i] === 'cardiB') {
        cardiB++
      }
      else if (userChoice[i] === 'beyonce') {
        beyonce++
      }
      else if (userChoice[i] === 'kanye') {
        kanye++
      }
    }

    //use frequent string from the array to find matching celebrity personality

    if (cardiB > beyonce && cardiB > kanye) {
      // print description and title of cardi b image onto the page
      $('.sectionThreeContainer').html(`<h2 class="cardiBh2">${descriptions[0].celebrity}</h2>
                                        <p class="cardiBp">${descriptions[0].celebrityDescription}</p>
                                        <div class="cardiBgif"><img src=${descriptions[0].image} /></div>`);
    }
    else if (beyonce > cardiB && beyonce > kanye) {
      // print description and title of beyonce image onto the page
      $('.sectionThreeContainer').html(`<h2 class="beyonceH2">${descriptions[1].celebrity}</h2>
                                        <p class="beyonceP">${descriptions[1].celebrityDescription}</p>
                                        <div class="beyonceGif"><img src=${descriptions[1].image} /></div>`);
    }
    else if (kanye > cardiB && kanye > beyonce) {
      // print description and title of kanye image onto the page
      $('.sectionThreeContainer').html(`<h2 class="kanyeH2"> ${descriptions[2].celebrity}</h2>
                                        <p class="kanyeP">${descriptions[2].celebrityDescription}</p>
                                        <div class="kanyeGif"><img src=${descriptions[2].image} /></div>`);
    }
    else {
      // print description and title of "wild" image onto the page
      $('.sectionThreeContainer').html(`<h2 class="wildH2"> ${descriptions[3].celebrity}</h2>
                                        <p class="wildP">${descriptions[3].celebrityDescription}</p>
                                        <div class="wildGif"><img src=${descriptions[3].image} /></div>`);
    }

    //Resets the quiz once user sumbits
    $(".resetButton").on("click", function () {
      $(window).scrollTop(0);
    });

  });
});



