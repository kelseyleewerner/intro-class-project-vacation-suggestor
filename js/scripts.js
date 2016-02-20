$(document).ready(function() {
  $("form#vacation-questions").submit(function(event) {
    var kids = $("select#kids").val();
    var temp = $("select#temp").val();
    var animal = $("select#animal").val();
    var swim = $("select#swim").val();
    var adventure = $("select#adventure").val();

    if (kids === 'yes') {
      $('#disney').show();
      $('#everest, #sydney').hide();
    }

      else {
        if (temp === 'cold') {
          $('#everest').show();
          $('#disney, #sydney').hide();
        }

          else {
            if (animal === 'mouse' && swim === 'yes' && adventure === 'no') {
              $('#disney').show();
              $('#everest, #sydney').hide();
            }
            if (animal === 'mouse' && swim === 'no' && adventure === 'no') {
              $('#disney').show();
              $('#everest, #sydney').hide();
            }
            if (animal === 'mouse' && swim === 'no' && adventure === 'yes') {
              $('#disney').show();
              $('#everest, #sydney').hide();
            }
            if (animal === 'shark' && swim === 'no' && adventure === 'no') {
              $('#disney').show();
              $('#everest, #sydney').hide();
            }
            if (animal === 'mouse' && swim === 'yes' && adventure === 'yes') {
              $('#sydney').show();
              $('#everest, #disney').hide();
            }
            if (animal === 'shark' && swim === 'yes' && adventure === 'no') {
              $('#sydney').show();
              $('#everest, #disney').hide();
            }
            if (animal === 'shark' && swim === 'yes' && adventure === 'yes') {
              $('#sydney').show();
              $('#everest, #disney').hide();
            }
            if (animal === 'shark' && swim === 'no' && adventure === 'yes') {
              $('#sydney').show();
              $('#everest, #disney').hide();
            }
          }
      }

    event.preventDefault();
   });

  $("form#email-submit").submit(function(event) {
    var email = $("input#email").val();

    if (email) {
      alert('Thank you! A confirmation email will be sent your way shortly.');
    }

    else {
      alert('Please enter an email address.');
    }

    event.preventDefault();
  });


});
