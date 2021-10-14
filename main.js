var images=[
   
  ];
  var i = 0
  function nextimage() {
    if (i==9){
      i=0
    }
    document.getElementById("album").src=images[i];
    i++;
  }