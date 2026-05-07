// calculator
// stores what user typed as a string then evaluates it

var expr = ''
var lastAnswer = ''
var freshCalc = false

function pressKey(k) {
  var ops = ['+', '-', '*', '/']

  // if last action was = and they press a number, start fresh
  if (freshCalc && !ops.includes(k)) {
    expr = ''
    lastAnswer = ''
    freshCalc = false
  }

  // if last action was = and they press operator, continue from answer
  if (freshCalc && ops.includes(k)) {
    expr = lastAnswer
    freshCalc = false
  }

  expr = expr + k

  document.getElementById('exprline').textContent = expr
  document.getElementById('numline').textContent = expr
}

function calculate() {
  if (expr == '') return

  try {
    // evaluate the expression string
    var res = Function('"use strict"; return (' + expr + ')')()
    // round floating point weirdness
    res = Math.round(res * 1e10) / 1e10

    document.getElementById('exprline').textContent = expr + ' ='
    document.getElementById('numline').textContent = res

    lastAnswer = String(res)
    freshCalc = true
  } catch(err) {
    document.getElementById('numline').textContent = 'Error'
    expr = ''
  }
}

function clearCalc() {
  expr = ''
  lastAnswer = ''
  freshCalc = false
  document.getElementById('exprline').textContent = ''
  document.getElementById('numline').textContent = '0'
}