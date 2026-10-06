const STORAGE_KEY = "drip-lesson-1-5-application"

// Основные элементы уже найдены: практика посвящена пути данных, а не верстке.
const form = document.querySelector(".application-form")
const result = document.querySelector("#result")
const clearButton = document.querySelector("#clear-draft")
const localStorageStatus = document.querySelector("#local-storage-status")
const sessionStorageStatus = document.querySelector("#session-storage-status")

const nameInput = document.querySelector("#participant-name")
const emailInput = document.querySelector("#participant-email")
const topicSelect = document.querySelector("#workshop-topic")

// БЛОК 5.1
// Получите строку из localStorage. Если она существует, вызовите JSON.parse,
// верните три значения в поля и обновите result и localStorageStatus.


// БЛОКИ 1–4
form.addEventListener("submit", (event) => {
  event.preventDefault()

  console.log("1.2. Получено событие", event.type)

  const formData = new FormData(form)
  const name = formData.get("name")
  const email = formData.get("email")
  const topic = formData.get("topic")

  console.log("Имя:", name)
  console.log("Email:", email)
  console.log("Тема:", topic)

  result.textContent = `${name}, заявка на тему «${topic}» принята. Подтверждение: ${email}`


  // 4.1: объедините три значения в объект application.


  // 4.2: превратите application в строку applicationJson.


  // 4.3: сохраните строку в localStorage и обновите localStorageStatus.


  // 5.3: сохраните ту же строку в sessionStorage и обновите sessionStorageStatus.
})


// БЛОК 5.2
clearButton.addEventListener("click", () => {
  // Удалите обе записи, сбросьте форму и обновите три сообщения на странице.
})
