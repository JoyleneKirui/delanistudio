$(document).ready(function() {
    var elements=[1,2,3]

    elements.forEach((index)=>{
        $('.content'+index).click(function() {
            $('.hidden-content'+index).toggle()
            $('.content'+index).toggle()
        });
        $('.hidden-content'+index).click(function() {
            $('.content'+index).toggle()
            $('.hidden-content'+index).toggle()
        });
    })

  
    $('#work1').mouseenter(function() {
        $('.work-heading').filter('#work1-title').show("slow");
    }).mouseleave(function() {
        $('#work1-title').hide("slow");
    });


    $('#work2').mouseenter(function() {
        $('.work-heading').filter('#work2-title').show("slow");
    }).mouseleave(function() {
        $('#work2-title').hide("slow");
    });

    $('#work3').mouseenter(function() {
        $('.work-heading').filter('#work3-title').show("slow");
    }).mouseleave(function() {
        $('#work3-title').hide("slow");
    });


    $('#work4').mouseenter(function() {
        $('.work-heading').filter('#work4-title').show("slow");
    }).mouseleave(function() {
        $('#work4-title').hide("slow");
    });

    $('#work5').mouseenter(function() {
        $('.work-heading').filter('#work5-title').show("slow");
    }).mouseleave(function() {
        $('#work5-title').hide("slow");
    });


    $('#work6').mouseenter(function() {
        $('.work-heading').filter('#work6-title').show("slow");
    }).mouseleave(function() {
        $('#work6-title').hide("slow");
    });

    $('#work7').mouseenter(function() {
        $('.work-heading').filter('#work7-title').show("slow");
    }).mouseleave(function() {
        $('#work7-title').hide("slow");
    });
    $('#work8').mouseenter(function() {
        $('.work-heading').filter('#work8-title').show("slow");
    }).mouseleave(function() {
        $('#work8-title').hide("slow");
    });
});


$(document).ready(function() {
    $("form.contact").submit(function(event) {
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("").val();
        if ($("input#name").val() && $("input#email").val()) {
            alert(name + ", we have received your message. Thank you for reaching out to us.");
        } else {
            alert("Please enter your Name and Email");
        }
    });
});

function myFunction() {

}