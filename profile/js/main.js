function askQuestions() {

  var firstName = prompt('What is your first name?');
  var lastName = prompt('What is your last name?');
  var fullName = firstName + '' + lastName;

  console.log(fullName);

  var age = prompt('How old are you?');
  age = parseInt(age);

  if (age >= 18) {

    console.log('User is an adult');

  } else if (age >= 13) {

    console.log ('User is an teenager');

  } else {

    console.log('User is a child');
  }

  if (firstName.toLowerCase().trim() === 'general' && lastName.toLowerCase().trim() !== 'assembly') {
    console.log ('Hi General!');

  } else {
    console.log ('Go away');
  }

// function addTax(price) {
//   var total = price * 1.2;
//   return total;
// }

}

// When the page has loaded
$(function() {

  $('img').on('click', askQuestions);

  // When the user clicks an h3
  $('h3').on('click', function() {

      //Toggle the next element
      $(this).next().slideToggle(500);
    });

});
