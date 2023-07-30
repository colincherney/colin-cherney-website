function about() {
  $(".right-side").empty();
  $(".right-side").append("<h2>Location:</h2>");
  $(".right-side").append("<h3>Scottsdale, Arizona</h3>");
  $(".right-side").append("<br />");
  $(".right-side").append("<h2>Education:</h2>");
  $(".right-side").append("<h3>Arizona State University</h3>");
  $(".right-side").append("<h3>Computer Information Systems, BS (2024)</h3>");
  $(".right-side").append("<br />");
  $(".right-side").append("<h2>About Me:</h2>");
  $(".right-side").append(
    "<h3>Hello ! I'm Colin, a passionate and curious student developer with an insatiable appetite for all things related to technology. I believe that technology is not just a tool but a medium to bring innovative ideas to life and make a positive impact on the world.</h3>"
  );
  $(".right-side").append("<br />");
  $(".right-side").append("<h2>Future Goals:</h2>");
  $(".right-side").append(
    "<h3>As I progress in my academic journey, my ultimate goal is to make a meaningful contribution to the technology industry. I aspire to work on projects that tackle real-world problems, leveraging technology to improve people's lives and transform the way we interact with the world around us.</h3>"
  );
}

function experience() {
  $(".right-side").empty();
  $(".right-side").append("<h2>Technologies I Have Worked With:</h2>");
  $(".right-side").append("<img class='icons' src='icons/python.png' />");
  $(".right-side").append("<img class='icons' src='icons/java.png' />");
  $(".right-side").append("<img class='icons' src='icons/html.png' />");
  $(".right-side").append("<img class='icons' src='icons/css.png' />");
  $(".right-side").append("<img class='icons' src='icons/javascript.png' />");
  $(".right-side").append("<img class='icons' src='icons/jquery.png' />");
  $(".right-side").append("<img class='icons' src='icons/node.png' />");
  $(".right-side").append("<img class='icons' src='icons/mysql.png' />");
  $(".right-side").append("<img class='icons' src='icons/git.png' />");
  $(".right-side").append("<img class='icons' src='icons/github.png' />");
  $(".right-side").append("<img class='icons' src='icons/vs-code.png' />");
}

function projects() {
  $(".right-side").empty();

  // weather project
  $(".right-side").append("<img class='project-img' src='weather.gif' />");
  $(".right-side").append("<h2 class='project-title'>Weather Site</h2>");
  $(".right-side").append("<div class='project-icons'></div>");
  $(".project-icons").append("<img src='icons/html.png' />");
  $(".project-icons").append("<img src='icons/css.png' />");
  $(".project-icons").append("<img src='icons/javascript.png' />");
  $(".project-icons").append("<img src='icons/jquery.png' />");
  $(".right-side").append("<div class='demo-and-source'></div>");
  $(".demo-and-source").append(
    "<a href='https://colincherney.github.io/weather-app-v2/' target='_blank' class='demo-and-source-buttons'>Live Demo</a>"
  );
  $(".demo-and-source").append(
    "<a href='https://github.com/colincherney/weather-app-v2' target='_blank' class='demo-and-source-buttons'>Source Code</a>"
  );
  $(".right-side").append("<div class='seperate-projects'></div>");

  // etch-a-sketch project
  $(".right-side").append(
    "<img class='project-img' src='etch-a-sketch.gif' />"
  );
  $(".right-side").append("<h2 class='project-title'>Etch-A-Sketch</h2>");
  $(".right-side").append("<div class='project-icons2'></div>");
  $(".project-icons2").append("<img src='icons/html.png' />");
  $(".project-icons2").append("<img src='icons/css.png' />");
  $(".project-icons2").append("<img src='icons/javascript.png' />");
  $(".right-side").append("<div class='demo-and-source2'></div>");
  $(".demo-and-source2").append(
    "<a href='https://colincherney.github.io/Etch-a-Sketch/' target='_blank' class='demo-and-source-buttons'>Live Demo</a>"
  );
  $(".demo-and-source2").append(
    "<a href='https://github.com/colincherney/Etch-a-Sketch' target='_blank' class='demo-and-source-buttons'>Source Code</a>"
  );
  $(".right-side").append("<div class='seperate-projects'></div>");

  // rock paper scissors project
  $(".right-side").append(
    "<img class='project-img' src='rock-paper-scissors.gif' />"
  );
  $(".right-side").append("<h2 class='project-title'>Rock Paper Scissors</h2>");
  $(".right-side").append("<div class='project-icons3'></div>");
  $(".project-icons3").append("<img src='icons/html.png' />");
  $(".project-icons3").append("<img src='icons/css.png' />");
  $(".project-icons3").append("<img src='icons/javascript.png' />");
  $(".right-side").append("<div class='demo-and-source3'></div>");
  $(".demo-and-source3").append(
    "<a href='https://colincherney.github.io/rock-paper-scissors/' target='_blank' class='demo-and-source-buttons'>Live Demo</a>"
  );
  $(".demo-and-source3").append(
    "<a href='https://github.com/colincherney/rock-paper-scissors' target='_blank' class='demo-and-source-buttons'>Source Code</a>"
  );
  $(".right-side").append("<div class='seperate-projects'></div>");

  // calculator project
  $(".right-side").append("<img class='project-img' src='calculator.gif' />");
  $(".right-side").append("<h2 class='project-title'>Calculator</h2>");
  $(".right-side").append("<div class='project-icons4'></div>");
  $(".project-icons4").append("<img src='icons/html.png' />");
  $(".project-icons4").append("<img src='icons/css.png' />");
  $(".project-icons4").append("<img src='icons/javascript.png' />");
  $(".right-side").append("<div class='demo-and-source4'></div>");
  $(".demo-and-source4").append(
    "<a href='https://colincherney.github.io/calculator/' target='_blank' class='demo-and-source-buttons'>Live Demo</a>"
  );
  $(".demo-and-source4").append(
    "<a href='https://github.com/colincherney/calculator' target='_blank' class='demo-and-source-buttons'>Source Code</a>"
  );
}

onload = about();
