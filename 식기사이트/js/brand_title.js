	
/* 브랜드 초이스 제목 js */

    window.onload = function (){



        // title

        var title =document.getElementById("title")

        title.innerHTML = "B R A N D  C H O I C E";


        // sub title

        var subtitle = document.createElement("p");

        var textnode = document.createTextNode("포플의 직접 엄선한 추천 브랜드");

        subtitle.appendChild(textnode);

        title.appendChild(subtitle);
