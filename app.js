const responses = {
  time: {
    title: "Time on platform",
    text: "The promise sounds helpful, but the system also learns what keeps you watching, scrolling, pausing, and returning."
  },
  predict: {
    title: "Predictable attention",
    text: "Personalisation can mean building a model of your habits: what you pause on, react to, skip, share, and come back for."
  },
  ads: {
    title: "Ad impressions served",
    text: "More engagement creates more moments where ads, sponsored posts, and recommendations can be placed in front of you."
  }
};

const buttons = document.querySelectorAll(".quotes button");
const resultTitle = document.querySelector("#result-title");
const resultText = document.querySelector("#result-text");
const resetBtn = document.querySelector("#resetBtn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.result;
    const response = responses[key];

    buttons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");

    resultTitle.textContent = response.title;
    resultText.textContent = response.text;

    resetBtn.hidden = false;
  });
});

resetBtn.addEventListener("click", () => {
  buttons.forEach((btn) => btn.classList.remove("selected"));

  resultTitle.textContent = "Make a choice";
  resultText.textContent =
    "Select one of the platform statements to reveal what the feed may optimise for.";

  resetBtn.hidden = true;
});
