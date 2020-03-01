//Stilizzazione dropdown menu (titolo)
$('.titolo').click(function(){ //Se io premo sul div titlo, si attiva qualcosa...
    if($(this).children('.dropdown').is(':visible')){ //con questo metodo evito il possibile intralcio tra lo slideUP e lo slideToggle in basso
        $(this).children('.dropdown').slideUp(500); //se premo un altro suo figlio, lui mi ritorna su

        $(this).children('h2').removeClass('.rotate');
    }else{
        $('.titolo').children('.dropdown').slideUp(500);//se premo su qualsiasi item, tutti i suoi figli tornano su
        $(this).children('.dropdown').slideToggle(1000);//toggleClass('ciao'); //se premo su menu item, suo filgio dropdown-menu, si vede o con crea classe (ciao che il toggle me la rende visibile)

        $(this).children('h2').addClass('.rotate');
    }
});

//Stilizzazione sottomenu (item)
$('.item > a').mouseenter(function(){
    if($(this).next('p').is(':visible')){
        $(this).next('p').slideUp(500);
    } else{
        $('.item > a').next('p').slideUp(500);
        $(this).next('p').slideToggle(500);
    }
})

//Cambio colore a p
$('p').mouseenter(function(){
    $('p').toggleClass('color')
})

//Comparsa hamburger-menu;
$('a i.fas.fa-hamburger').click(function(){
    $('.header-right').slideToggle(1000);
})


//Chiudo hamburger-menu
$('a i.far.fa-times-circle').click(function(){
    $('.header-right').slideUp(1000);
})

// $( ".menu-item" ).click(function() {
//   $(this).children('.dropdown-menu').toggleClass('ciao');
//
// });
