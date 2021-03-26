const firstnameInput = document.getElementById('firstname')
const lastnameInput = document.getElementById('lastname')
const descriptionInput = document.getElementById('description')
const emailInput = document.getElementById('email')
const phoneInput = document.getElementById('phone')
const preview = document.getElementById('preview')
const rawHtml = document.getElementById('raw')

const profile = function () {
  const firstname = firstnameInput.value
  const lastname = lastnameInput.value
  const description = descriptionInput.value
  const EMAIL_ADDRESS = emailInput.value
  const PHONE_NUMBER = phoneInput.value

  preview.innerHTML =
    '<h1>' + 'Hi, my name is ' + '<em>' + firstname + ' ' + lastname + '</em>' + '</h1>.\n' +
    '<p>' + description + '</p>\n' + '<p>' +
    ' If you\'re interested in a date, you can email me at ' +
    '<a href="mailto:' + EMAIL_ADDRESS + '" target="_blank">' + EMAIL_ADDRESS + '</a>\n' +
    ' or give me a call at ' +
    '<a href="tel:' + PHONE_NUMBER + '" target="_blank">' + PHONE_NUMBER + '</a>.\n' +
    '</p>'
  rawHtml.textContent = preview.innerHTML
}
firstnameInput.addEventListener('input', profile)
lastnameInput.addEventListener('input', profile)
descriptionInput.addEventListener('input', profile)
emailInput.addEventListener('input', profile)
phoneInput.addEventListener('input', profile)
