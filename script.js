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
const savedApplicationJson = localStorage.getItem(STORAGE_KEY)

if (savedApplicationJson) {
  const savedApplication = JSON.parse(savedApplicationJson)
  nameInput.value = savedApplication.name
  emailInput.value = savedApplication.email
  topicSelect.value = savedApplication.topic
  result.textContent = "Черновик восстановлен"
  localStorageStatus.textContent = "Найден сохраненный черновик"
}


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


  const application = {
    name,
    email,
    topic,
  }
  const applicationJson = JSON.stringify(application)
  console.log("Объект заявки:", application)
  console.log("JSON заявки:", applicationJson)

  localStorage.setItem(STORAGE_KEY, applicationJson)
  localStorageStatus.textContent = "Черновик сохранен"

  sessionStorage.setItem(STORAGE_KEY, applicationJson)
  sessionStorageStatus.textContent = "Копия существует до закрытия вкладки"
})


// БЛОК 5.2
clearButton.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY)
  sessionStorage.removeItem(STORAGE_KEY)
  form.reset()
  result.textContent = "Черновик удален"
  localStorageStatus.textContent = "Локального черновика нет"
  sessionStorageStatus.textContent = "Сессионной копии нет"
})
