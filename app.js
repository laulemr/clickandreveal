const responses = {
  time: {
    title: "Time on platform",
    text: "The promise sounds helpful, but the system also learns what keeps you watching, scrolling, pausing, and returning."
  },
  predict: {
    title: "Predictable attention",
    text: "Personalization can mean building a model of your habits: what you pause on, react to, skip, share, and come back for."
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
  button.setAttribute("aria-pressed", "false");

  button.addEventListener("click", () => {
    const key = button.dataset.result;
    const response = responses[key];

    if (!response) return;

    buttons.forEach((btn) => {
      btn.classList.remove("selected");
      btn.setAttribute("aria-pressed", "false");
    });

    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");

    resultTitle.textContent = response.title;
    resultText.textContent = response.text;

    resetBtn.hidden = false;

    // Move focus to updated content so screen readers announce it
    resultTitle.focus();
  });
});

resetBtn.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.classList.remove("selected");
    btn.setAttribute("aria-pressed", "false");
  });

  resultTitle.textContent = "Make a choice";
  resultText.textContent =
    "Select one of the platform statements to reveal what the feed may optimize for.";

  resetBtn.hidden = true;

  // Return focus to the first choice
  if (buttons.length > 0) {
    buttons[0].focus();
  }
});
