const tabsContainers = document.querySelectorAll('.tabs');

tabsContainers.forEach((tabsContainer) => {
  const tabs = Array.from(tabsContainer.querySelectorAll('.tab'));
  const contents = Array.from(tabsContainer.querySelectorAll('.tab__content'));

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      const activeTab = tabsContainer.querySelector('.tab_active');
      const activeContent = tabsContainer.querySelector('.tab__content_active');

      activeTab.classList.remove('tab_active');
      activeContent.classList.remove('tab__content_active');

      tab.classList.add('tab_active');
      contents[index].classList.add('tab__content_active');
    });
  });
});
