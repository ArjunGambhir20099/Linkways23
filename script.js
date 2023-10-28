function categorySlider() {
    var x = document.getElementById("myCategories");
    if (x.className === "categories") {
      x.className += " responsive";
    } else {
      x.className = "categories";
    }
  }

function openCity(evt, furniture) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(furniture).style.display = "block";
    evt.currentTarget.className += " active";
  }


  function search_brand() {
    //alert('welcome');
    var a=document.getElementById('searchbar').value;
    a=a.toLowerCase();
    //alert(a)
    let x = document.getElementsByClassName('tabcontent');
        
      for (i = 0; i < x.length; i++) { 
          if (!x[i].innerHTML.toLowerCase().includes(a)) {
              x[i].style.display="none";
          }
          else {
              x[i].style.display="list-item";                 
          }
      }
  }

var itemN;itemD;itemC;itemM;itemI, outI
function preview_2(event)
{
var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("outimage");
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}

function preview_1()
{
  itemN=document.getElementById('itemname').value;
  itemC=document.getElementById('contact').value;
  itemM=document.getElementById('month').value;
  itemD=document.getElementById('itemdetail').value;
  document.getElementById('outname').innerHTML=itemN;
  document.getElementById('outdetail').innerHTML=itemD;
  document.getElementById('outmonth').innerHTML=itemM;
}

function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}