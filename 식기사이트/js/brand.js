

/* 브랜드 초이스 js */

$(function(){

	$(function(){

		$.ajax({

			url: "./brand.json",

			dataType: "json",

			success : function(data){

				if(data.length>0){

					for(var i in data){

						$(".box").eq(i).append('<a href="#">' + "<img src='img/"+data[i].url+"'/>" + '</a>'); 

						$(".box").eq(i).append('<h3><a href="#">'+data[i].title+"</a><h3>");     

						$(".box").eq(i).append('<h6><a href="#">'+data[i].subtitle+"</a></h6>");                             

						$(".box").eq(i).append('<p><a href="#">'+data[i].brand+"</a></p>");  


					}

				}

			}

		});

	});

});