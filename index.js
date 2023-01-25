const issueForm = document.querySelector('form')
const issueInput = document.querySelector('input')

issueForm.addEventListener("submit", e => {
    e.preventDefault()
    window.location.pathname = `/${issueInput.value}.pdf`
    console.log(issueInput)
})