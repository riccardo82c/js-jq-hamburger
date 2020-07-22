/* Hamburger menu:
mostrare / nascondere il menu principale */

$(".header-right :last-child").click(function () {
  $(".hamburger-menu").show("fast");
});

// prova callback - dopo .show si attiva la funzione che fa l'alert
/* $(".header-right :last-child").click(function () {
  $(".hamburger-menu").show("fast", function () {
    alert("ciao");
  });
}); */

$("a.close").click(function () {
  $(".hamburger-menu").hide("fast");
});
