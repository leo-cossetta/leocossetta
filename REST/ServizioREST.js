var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {

    var out = "";

    if (this.readyState == 4 && this.status == 200) {

        var file = JSON.parse(this.responseText);

        for(var x in file){

            out += "<tr><td>" + file[x].date + "</td><td> " + file[x].title.rendered + "</td></tr>";

            document.getElementById("Visualizza").innerHTML = out;
        }
    }
};

xmlhttp.open("GET", "https://seahawkmedia.com/wp-json/wp/v2/posts?search=Drupal", true);

xmlhttp.send();

//https://www.desrparcosud.it/wp-json/wp/v2/posts?search=AMAP

//https://seahawkmedia.com/wp-json/wp/v2/posts?search=Drupal
