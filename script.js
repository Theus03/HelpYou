const filterElement = document.getElementById('filter')
const cards = document.querySelectorAll('.cards li')

filterElement.addEventListener('input', () => {
    if (filterElement.value != ''){
        cards.forEach(card => {
            let title = card.querySelector('h2')
            title = title.textContent.toLowerCase()
            let filterText = filterElement.value.toLowerCase()
            if (title.includes(filterText)){
                card.style.display = 'block'
            } else {
                card.style.display = 'none'
            }
            
        })
    } else {
        cards.forEach(card => {
            card.style.display = 'block'
        })
    }
})
