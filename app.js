window.onload= function(){
    var btn=document.getElementsByTagName("button")[0];
    var result=document.getElementById("result");
    var searchtxt=document.getElementsByName("searchtxt")[0];

    
    btn.onclick= function(){
        var httpRequest= new XMLHttpRequest();
        var url;
        if(searchtxt.value!=null){
            url="http:///localhost:8080/superheroes.php"+"?query="+searchtxt.value;
            httpRequest.onreadystatechange=dothis;
            httpRequest.open('GET',url);
            httpRequest.send();
        }else{
            url="http:///localhost:8080/superheroes.php";
            httpRequest.onreadystatechange=dothis;
            httpRequest.open('GET',url);
            httpRequest.send();
             
        }
        function dothis(){
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    var response = httpRequest.responseText;
                    result.innerHTML=response;
                } else {
                alert('There was a problem with the request.');
                }
            }
        }  
    }
}