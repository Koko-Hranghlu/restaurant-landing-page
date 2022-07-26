const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('.tab-section')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    
    const target = document.querySelector(tab.dataset.tabTarget)
    
    tabContents.forEach(content => {
      content.classList.remove('active')
    })
    target.classList.add('active')
  })
})
