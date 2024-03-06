$(document).ready(function(){

    let fetchData

    $(".Primero").css({"background-color": "blue"})
    $("#Segundo").css({"background-color": "red"})

    $("#btn1").animate({width:"300px"})
    
    // $("#btn2").mouseenter(function(){
    //     $("#Segundo").show();
    //     $("#Tercero").removeClass("red")
    //     $("#Tercero").addClass("blue")
    // })

    $("#btn1").click(function(){
        $("#Segundo").hide();
         alert($("#Segundo").attr("title"));
         $("#Segundo").text("Hola mundo :)");
         $("#Segundo").html("Hola <strong>programadores</strong>")
        //alert($("#Segundo").html());

        $(".Primero").append("<h1>Hola append :)");
        $(".Primero").prepend("<h1>Hola prepend :)");
        $(".Primero").after("<p>Hola Programadores After</p>");
        $(".Primero").before("<p>Hola Programadores before</p>");
        //$(".Primero").remove();
        $("#btn2").empty();

        $("#Tercero").removeClass("blue")
        $("#Tercero").addClass("red")
        //$("#Tercero").toggleClass("red")
        
    })

    const url = 'https://api.github.com/users/shrutikapoor08/repos'; 

    fetch(url)
        .then(response => response.json())
        .then(repos => { 
            const reposList = repos.map(repo => repo.name);
            console.log(typeof(reposList))
            this.fetchData = reposList
            console.log(this.fetchData)
            for(let i = 0; i < this.fetchData.length;i++){
                $("#data").append("<p>" + reposList[i] + "</p>");
            }
        })
        .catch(err => console.log(err))
});


$(".btn2").click(function(){
       document.location.href="/Pages/AfiliacionDeCelular/AfiliacionCelular_1/"
})