// word counter - runs every time user types something
// uses the oninput event on the textarea

function countWords() {
  var txt = document.getElementById('writingarea').value

  // count words - split by spaces basically
  var wordcount = 0
  if (txt.trim() != '') {
    wordcount = txt.trim().split(/\s+/).length
  }

  // character count is just the length
  var charcount = txt.length

  // count sentences by looking for . ! ?
  var sentcount = 0
  if (txt.trim() != '') {
    var matches = txt.match(/[.!?]+/g)
    sentcount = matches ? matches.length : 0
  }

  // update the page
  document.getElementById('wcount').textContent = wordcount
  document.getElementById('ccount').textContent = charcount
  document.getElementById('scount').textContent = sentcount
}