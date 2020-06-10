// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function () {
//     var div = this.parentElement;
//     div.style.display = "none";
//   };
// }

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector("ul");
// list.addEventListener(
//   "click",
//   function (ev) {
//     if (ev.target.tagName === "LI") {
//       ev.target.classList.toggle("checked");
//     }
//   },
//   false
// );

// Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       var div = this.parentElement;
//       div.style.display = "none";
//     };
//   }
// }

// Ajax post when user completes login form.
$(document).ready(function () {

  //User clicks SUBMIT user details will be validated
  $("#loginF").on("submit", function (event) {
    event.preventDefault();

    let user = {
      username: $("#email").val().trim(),
      password: $("#psw").val().trim(),
    };
    console.log(user);

    //send post request
<<<<<<< HEAD
    $.ajax("/api/users", {
      type: "POST",
      data: user
    }).then(

      function () {
        console.log("created new user");
        //reload current page with updated user list.
        // location.reload();
      })
  });

  
  // Ajax post when user updates an item 
  $(".update-item").on("click", function (event) {
    let id = $(this).data("id");

    $.ajax("api/items" + id, {
      type: "PUT"
    }).then(
      function () {
        console.log("item updated", id);
        // location.reload();
      });
  });


  // Ajax post when user deletes cart. 
  $(".delete-cart").on("click", function (event) {

    // Send the DELETE request.
    $.ajax("api/saleItems/", {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted cart");
        // Reload the page to get the updated list
        // location.reload();
=======
    $.post("/api/users", {
      email: user.username,
      password: user.password
    }).then(function () {
        console.log("logged in");
        window.location.replace("/");
      })
      .catch(function (err) {
        console.log(err);
>>>>>>> 74dce26cbd4440ac737396b79c8c8e6b1b173450
      });
    });

    // Ajax post when user adds item to cart. 
    $(".addtocart").on("click", function (event) {
      var id = $(this).parent().data("product");
      console.log(id);

      // Send the POST request.
      $.ajax("/api/saleItems/" + id, {
        type: "POST"
      }).then(
        function () {
          console.log("added item to cart", id);
          // Reload the page to get the updated list
          location.reload();
        });
    });


    // Ajax post when user deletes cart. 
    $(".delete-cart").on("click", function (event) {

      // Send the DELETE request.
      $.ajax("api/saleItems/", {
        type: "DELETE"
      }).then(
        function () {
          console.log("deleted cart");
          // Reload the page to get the updated list
          location.reload();
        });
    });

    // Ajax post when user deletes item from cart. 
    $(".delete-itemCart").on("click", function (event) {
      var id = $(this).data("id");

      // Send the DELETE request.
      $.ajax("/api/items/" + id, {
        type: "DELETE"
      }).then(
        function () {
          console.log("deleted item from cart", id);

          // Reload the page to get the updated list
          location.reload();
        });
    });
  });
