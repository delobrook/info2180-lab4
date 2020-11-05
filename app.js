window.onload= function(){
    var btn=document.getElementsByTagName("button")[0];

    btn.onclick= function(){
        var httpRequest= new XMLHttpRequest();
        var url="http:///localhost:8080/superheroes.php";
        httpRequest.onreadystatechange=dothis;
        httpRequest.open('GET',url);
        httpRequest.send();
        function dothis(){
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                alert(response);
                } else {
                alert('There was a problem with the request.');
                }
            }
        }
        
        
    }
}