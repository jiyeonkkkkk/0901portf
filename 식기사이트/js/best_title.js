
/*메인 베스트 상품 제목 js*/


         window.onload = function (){



        // title

        var title =document.getElementById("title")

        title.innerHTML = "B E S T  I T E M S";


        // sub title

        var subtitle = document.createElement("p");

        var textnode = document.createTextNode("포플의 베스트 상품");

        subtitle.appendChild(textnode);

        title.appendChild(subtitle);