const tabs = document.querySelectorAll('[data-tab-target]');
const tabContent = document.querySelectorAll('.tab-section')
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    
    tabContent.forEach(content => {
      content.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    
    tab.classList.add('active')
    target.classList.add('active')
  })
})
