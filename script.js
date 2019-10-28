  function showAbout() {
    $('#js-sec-about').show();
    $('#js-sec-project01').hide();
    $('#js-sec-project02').hide();
    $('#js-sec-project03').hide();
    document.getElementById("js-p-about").style.color = "#cc992c";
    document.getElementById("js-p-projects").style.color = "#EDF1F5";
  }

  
  function showProjects() {
    $('#js-sec-project01').show();
    $('#js-sec-project02').show();
    $('#js-sec-project03').show();
    $('#js-sec-about').hide();
    document.getElementById("js-p-projects").style.color = "#cc992c";
    document.getElementById("js-p-about").style.color = "#EDF1F5";
  }
