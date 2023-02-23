const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-modal-target]')

openModalButtons.forEach(div => {
    div.addEventListener('click', () => {
        const modal = document.querySelector(div.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(div => {
    div.addEventListener('click', () => {
        const modal = div.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if(modal == null) return 
    modal.classList.add('active')
}

function closeModal(modal) {
    if(modal == null) return 
    modal.classList.remove('active')
}