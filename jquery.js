$(document).ready(function () {
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  let highscore = 0;

  const displayMessage = function (message) {
    $(".message").text(message);
  };

  $(".check").click(function () {
    const guess = Number($(".guess").val());

    if (!guess) {
      displayMessage("⛔ No Numbers");
    } else if (guess === secretNumber) {
      displayMessage("Correct Numbers 🎉");
      $(".number").text(secretNumber).width("30rem");
      // $(".number").width("30rem");
      $("body").css("background-color", "#60b347");

      if (score > highscore) {
        highscore = score;
        $(".highscore").text(highscore);
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        score--;
        displayMessage(guess > secretNumber ? "📈 Too High" : "📉 To Low");
        $(".score").text(score);
      } else {
        displayMessage("💥 You lost the game!");
        $(".score").text(0);
      }
    }
  });

  $(".again").click(function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage("Start guessing...");
    $(".score").text(score);
    $(".number").text("?").width("15rem");
    // $(".number").width("15rem");
    $(".guess").val("");
    $("body").css("background-color", "#222");
  });
});
