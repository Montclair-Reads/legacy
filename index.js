const issueForm = document.querySelector('.issue-form')
const issueInput = document.querySelector('issue-input')

issueForm.addEventListener("submit", e => {
    e.preventDefault()
    window.location.pathname = `/${issueInput.value}.pdf`
})