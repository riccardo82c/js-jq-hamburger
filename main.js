/* Hamburger menu:
mostrare / nascondere il menu principale */

$(".header-right :last-child").click(function () {
  // 1 modo.  utilizzo il metodo .show() per mostrare un elemento nascosto
  /* $(".hamburger-menu").show("fast"); */

  // 2 modo. utilizzo il metodo .addClass per aggiungere una classe che mi dia display block all'elemento con display none;

  $(".hamburger-menu").addClass("active");
});

// prova callback - dopo .show si attiva la funzione che fa l'alert
/* $(".header-right :last-child").click(function () {
  $(".hamburger-menu").show("fast", function () {
    alert("ciao");
  });
}); */

$("a.close").click(function () {
  /* $(".hamburger-menu").hide("fast"); */
  $(".hamburger-menu").removeClass(
    "active"
  ); /* qui rimuovo la classe .active ovvero il display block */
});
