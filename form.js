// form validation
// i wrote this after watching a tutorial on js events

function submitForm(e) {
  e.preventDefault()

  // grab the inputs
  var nameBox = document.getElementById('fname')
  var emailBox = document.getElementById('femail')

  // grab error divs
  var nameMsg = document.getElementById('nameErr')
  var emailMsg = document.getElementById('emailErr')

  // reset errors first
  nameBox.classList.remove('redborder')
  emailBox.classList.remove('redborder')
  nameMsg.classList.remove('show')
  emailMsg.classList.remove('show')

  var isOk = true

  // check name not empty
  if (nameBox.value.trim() == '') {
    nameBox.classList.add('redborder')
    nameMsg.classList.add('show')
    isOk = false
  }

  // check email has @ and a dot
  var em = emailBox.value.trim()
  if (em == '' || !em.includes('@') || !em.includes('.')) {
    emailBox.classList.add('redborder')
    emailMsg.classList.add('show')
    isOk = false
  }

  // if both ok show success
  if (isOk) {
    var doneMsg = document.getElementById('successmsg')
    doneMsg.style.display = 'block'
    // hide it after 3 seconds
    setTimeout(function() {
      doneMsg.style.display = 'none'
    }, 3000)
    // clear the form
    nameBox.value = ''
    emailBox.value = ''
    document.getElementById('fmessage').value = ''
  }
}