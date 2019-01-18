// on-click function to POST form info to data file

/* **this logic is same as bottom of employer.handlebars, not completed. 
Form submission JS logic may go under  employer.handlebars bc of js 
logic for bootstrap form submission */

$(document).ready(function(){
    // document.on click
    $(document).on("click", "btn-primary", function(){
        // prevent form from submitting
        event.preventDefault();

        // new data object holding new job
        var jobPost = {
            // grabbing each value from form field
            job_title: $("#job-title").val().trim(),
            employer: $("#employer-index").val().trim(),
            employer_picture: $("#avatar").val().trim(),
            job_type: $("#job-type").val().trim(),
            description: $("#description-index").val().trim(),
            beg_price: $("#beg-price").val().trim(),
            int_price: $("#int-price").val().trim(),
            adv_price: $("#adv-price").val().trim(),
            emp_email: $("#emp-email").val().trim(),
            emp_phone: $("#emp-phone").val().trim(),
            emp_linkedin: $("#emp-linkedin").val().trim(),
            emp_site: $("#emp-site").val().trim(),
        }

        // AJAX call
        // send post request
        $.ajax("/json", {
            method: "POST",
            data: jobPost
        // callback function
        }).then(
            function(){
                // confirm POST occured
                console.log("job posted to DB!");
                // redirect employer
                // location.redirect("/");
            }
        );
    });


});