/* Hamburger menu:
mostrare / nascondere il menu principale */

$("a i").click(function () {
  $(".hamburger-menu").show("fast");
});

$("a.close").click(function () {
  $(".hamburger-menu").hide("fast");
});
