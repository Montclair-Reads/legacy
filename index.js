const issueForm = document.querySelector('form')
const issueInput = document.querySelector('input')

issueForm.addEventListener("submit", e => {
    e.preventDefault()
    console.log(issueInput)
    window.location.pathname = `/${issueInput.value}.html`
})