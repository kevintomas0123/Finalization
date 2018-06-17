/* // Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-sleep").on("click", function(event) {
      var id = $(this).data("id");
      var newSleep = $(this).data("newsleep");
  
      var newSleepState = {
        sleepy: newSleep
      };
  
      // Send the PUT request.
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }); 
    */
  
    $('#myModal .save').on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newPost = {
        companyName: $("#companyName").val().trim(),
        sharesOut: $("#cSo").val().trim(),
        year: $("#fYe").val().trim(),
        sales: $("#salesNet").val().trim(),
        cogs: $("#costOfGood").val().trim(),
        rdExp: $("#rNd").val().trim(),
        sga: $("#sGnA").val().trim(),
        depAmo: $("#dAa").val().trim(),
        intExp: $("#interestEx").val().trim(),
        nonOpInc: $("#nOi").val().trim(),
        incTax: $("#incomeTax").val().trim(),
        otherInc: $("#oIl").val().trim(),
        proIncTaxes: $("#pFiT").val().trim(),
        opCashSec: $("#operatingCash").val().trim(),
        receiv: $("#receivables").val().trim(),
        inven: $("#inventories").val().trim(),
        otherCA: $("#oCa").val().trim(),
        ppe: $("#pPe").val().trim(),
        goodwill: $("#gIi").val().trim(),
        otherA: $("#otherAssets").val().trim(),
        currDebt: $("#currentDebt").val().trim(),
        payable: $("#accountsPayable").val().trim(),
        incTaxPay: $("#iTp").val().trim(),
        otherCurrLiab: $("#oCl").val().trim(),
        ltd: $("#lTd").val().trim(),
        otherLiab: $("#otherLiabilities").val().trim(),
        defTaxes: $("#dtoci").val().trim(),
        minInterest: $("#minInt").val().trim(),
        preStock: $("#preSto").val().trim(),
        picc: $("#picc").val().trim(),
        retEarn: $("#retainedEarnings").val().trim(),


      };
  
      // Send the POST request.
      $.ajax("/api/posts", {
        type: "POST",
        data: newPost
      }).then(
        function() {
          console.log("submitted");
          // Reload the page to get the updated list
          //location.reload();
        }
      );
    });
  
    $(".delete-cat").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/cats/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  