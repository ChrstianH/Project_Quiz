import { IQuestion } from "./interfaces/IQuestion";

const ENG_EASY_URL =
  "https://vz-wd-24-01.github.io/typescript-quiz/questions/easy.json";
const ENG_HARD_URL =
  "https://vz-wd-24-01.github.io/typescript-quiz/questions/hard.json";
const GER_EASY_URL =
  "https://vz-wd-24-01.github.io/typescript-quiz/questions/leicht.json";
const GER_HARD_URL =
  "https://vz-wd-24-01.github.io/typescript-quiz/questions/schwer.json";

const formDiff = document.getElementById("form-difficulty") as HTMLFormElement;
const selectLang = document.getElementById("language") as HTMLFormElement;
const selectDiff = document.getElementById("difficulty") as HTMLFormElement;

const formQuest = document.getElementById("form-question") as HTMLFormElement;
const cardCnt = document.getElementById("card-container") as HTMLDivElement;
const submitBtn = document.getElementById("submit") as HTMLButtonElement;
const restartBtn = document.getElementById("restartBtn") as HTMLButtonElement;

selectLang.addEventListener("change", () => {
  if (selectLang.value === "en") {
    submitBtn.textContent = "Submit";
    restartBtn.textContent = "Restart Quiz";
  } else if (selectLang.value === "de") {
    submitBtn.textContent = "Absenden";
    restartBtn.textContent = "Quiz wiederholen";
  }
});
const scoreTextEl = document.getElementById(
  "scoreText"
) as HTMLParagraphElement;

formDiff.addEventListener("submit", async (event: Event) => {
  event.preventDefault();

  const lang = selectLang.value;
  const diff = selectDiff.value;

  let URL = "";
  if (lang === "de" && diff === "easy") {
    URL = GER_EASY_URL;
  } else if (lang === "de" && diff === "hard") {
    URL = GER_HARD_URL;
  } else if (lang === "en" && diff === "easy") {
    URL = ENG_EASY_URL;
  } else if (lang === "en" && diff === "hard") {
    URL = ENG_HARD_URL;
  }

  cardCnt.innerHTML = "";
  try {
    const response = await fetch(URL);
    const data: IQuestion[] = await response.json();
    let questionCount = 0;
    for (const question of data) {
      questionCount++;
      const card = document.createElement("div") as HTMLDivElement;
      card.classList.add("card");
      const questionElement = document.createElement("b") as HTMLElement;
      questionElement.textContent = question.question;
      const answerDiv = document.createElement("div") as HTMLDivElement;
      for (let i = 0; i < 4; i++) {
        const answerInput = document.createElement("input") as HTMLInputElement;
        answerInput.type = "radio";
        answerInput.name = `answer${questionCount}`;
        answerInput.id = `answer${questionCount}_${i}`;
        answerInput.value = i.toString();
        const answerLabel = document.createElement("label") as HTMLLabelElement;
        answerLabel.setAttribute("for", `answer${questionCount}_${i}`);
        answerLabel.textContent = question.answers[i];
        const answerBox = document.createElement("div") as HTMLDivElement;
        answerBox.appendChild(answerInput);
        answerBox.appendChild(answerLabel);
        answerDiv.appendChild(answerBox);
      }
      card.appendChild(questionElement);
      card.appendChild(answerDiv);
      cardCnt.appendChild(card);
      formQuest.style.display = "block";
    }
  } catch (error) {
    console.error(error);
  }
});

formQuest.addEventListener("submit", async (event: Event) => {
  event.preventDefault();
  const lang = selectLang.value;
  const diff = selectDiff.value;

  let URL = "";
  if (lang === "de" && diff === "easy") {
    URL = GER_EASY_URL;
  } else if (lang === "de" && diff === "hard") {
    URL = GER_HARD_URL;
  } else if (lang === "en" && diff === "easy") {
    URL = ENG_EASY_URL;
  } else if (lang === "en" && diff === "hard") {
    URL = ENG_HARD_URL;
  }
  let score = 0;
  let answersGiven = 0;
  let data: IQuestion[] = [];
  try {
    const response = await fetch(URL);
    data = await response.json();

    let questionCount = 0;
    for (const question of data) {
      const correctAnswer = question.correct;
      questionCount++;
      const answer = document.querySelector(
        'input[name="answer' + questionCount.toString() + '"]:checked'
      ) as HTMLInputElement | any;
      if (!answer) {
        const answerBoxEl = document.querySelector(
          'input[name="answer' + questionCount.toString() + '"]'
        ) as HTMLInputElement | any;
        answerBoxEl.parentElement.parentElement.parentElement.style.border =
          "2px solid red";
      } else {
        const answerGiven = answer.value;
        answer.parentElement.parentElement.parentElement.style.border = "none";

        if (answerGiven) {
          answersGiven++;
        }
        if (Number(answerGiven) === correctAnswer) {
          score++;
          answer.parentElement.parentElement.parentElement.style.display =
            "none";
        } else {
          const answerBoxElements = document.querySelectorAll(
            'input[name="answer' + questionCount.toString() + '"]'
          ) as HTMLInputElement[] | any;
          answerBoxElements[correctAnswer].parentElement.style.backgroundColor =
            "lightgreen";
          answerBoxElements[
            Number(answerGiven)
          ].parentElement.style.backgroundColor = "darksalmon";
        }
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    scrollToTop();
    if (answersGiven === data.length) {
      if (lang === "de") {
        scoreTextEl.textContent = `${score} von ${data.length} Fragen richtig beantwortet.`;
        document.getElementsByTagName("section")[1].style.display = "block";
      } else if (lang === "en") {
        scoreTextEl.textContent = `You answered ${score} of ${data.length} questions correctly.`;
        document.getElementsByTagName("section")[1].style.display = "block";
      }
      submitBtn.style.display = "none";
    } else {
      window.alert(
        lang === "de"
          ? "Bitte zuerst alle Fragen beantworten!"
          : "Please answer all questions first!"
      );
    }
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
