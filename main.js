const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('.tab-section')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // removes any highlighted tab
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    // highlights the clicked tab
    tab.classList.add('active')
    
    // gets the content id of the tab clicked 
    const target = document.querySelector(tab.dataset.tabTarget)
    // removes any tab content
    tabContents.forEach(content => {
      content.classList.remove('active')
    })
    // shows the the current tab content
    target.classList.add('active')
  })
})
