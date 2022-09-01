 
/* 메인 베스트 상품 js */

$(function(){

  $(function(){

   $.ajax({

      url: "./test.json",

      dataType: "json",

      success : function(data){

         if(data.length>0){

            for(var i in data){

               $(".box").eq(i).append('<a href="#">' + "<img src='img/"+data[i].url+"'/>" + '</a>'); 

               $(".box").eq(i).append('<h5><a href="#">'+data[i].title+"</a><h5>");      

               $(".box").eq(i).append('<h4><a href="#">'+data[i].subtitle+"</a></h4>");                             

               $(".box").eq(i).append("<h6>"+data[i].price1+"</h6>");

               $(".box").eq(i).append('<p><a href="#"><b>'+data[i].price2+"</b></a></p>");  

               $(".box").eq(i).append('<p class="free">'+data[i].free+"</p>"); 

               $(".box").eq(i).append('<p class="deli">'+data[i].deli+"</p>");

               $(".box").eq(i).append('<p class="new">'+data[i].new+"</p>"); 

            }

         }

      }

   });

});

});