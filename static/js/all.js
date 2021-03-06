document.addEventListener('DOMContentLoaded', function () {
  let birthdate_span = document.getElementById('birthdate')

  let birthdate = moment(birthdate_span.dataset.timestamp)
  let age = moment().diff(birthdate, 'years')

  birthdate_span.innerHTML = `${birthdate.format('LL')} (${age} anos)`

  let last_updated = document.getElementById('last-updated')
  last_updated.innerHTML = moment(last_updated.dataset.timestamp).fromNow()

  feather.replace()
})
