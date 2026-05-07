// localstorage demo
// learned about this in class - data stays even after refresh

// when page loads check if there's already a saved note
window.onload = function() {
  var existing = localStorage.getItem('myPortfolioNote')
  if (existing) {
    document.getElementById('notearea').value = existing
    showStatus('Loaded your saved note', 'ok')
  }
}

function saveIt() {
  var txt = document.getElementById('notearea').value
  localStorage.setItem('myPortfolioNote', txt)
  showStatus('Saved at ' + new Date().toLocaleTimeString(), 'ok')
}

function loadIt() {
  var saved = localStorage.getItem('myPortfolioNote')
  if (saved != null) {
    document.getElementById('notearea').value = saved
    showStatus('Note loaded from storage', 'ok')
  } else {
    showStatus('Nothing saved yet - type something first', '')
  }
}

function deleteIt() {
  localStorage.removeItem('myPortfolioNote')
  document.getElementById('notearea').value = ''
  showStatus('Cleared from storage', 'del')
}

// helper to update the status text
function showStatus(msg, type) {
  var el = document.getElementById('notestatus')
  el.textContent = msg
  el.className = 'savestatus ' + type
}