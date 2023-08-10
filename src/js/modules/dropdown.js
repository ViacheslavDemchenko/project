export default function dropdown() {
  if(document.querySelector('.header-section__menu')) {
    document.querySelectorAll('.select').forEach(function(selectElement) {
      const selectOption = selectElement.querySelectorAll('option');
      const selectOptionLength = selectOption.length;
      const selectedOption = Array.from(selectOption).find(option => option.selected);
      const duration = 450;
  
      selectElement.style.display = 'none';
      const selectWrapper = document.createElement('div');
      selectWrapper.classList.add('select');
      selectElement.parentNode.insertBefore(selectWrapper, selectElement);
      const newSelect = document.createElement('div');
      newSelect.classList.add('new-select');
      newSelect.textContent = Array.from(selectElement.querySelectorAll('option:disabled')).map(option => option.textContent).join(' ');
      selectWrapper.appendChild(selectElement);
      selectWrapper.appendChild(newSelect);
  
      const selectHead = selectElement.nextElementSibling;
      const selectList = document.createElement('div');
      selectList.classList.add('new-select__list');
      selectHead.parentNode.insertBefore(selectList, selectHead);
  
      for (let i = 1; i < selectOptionLength; i++) {
          const newItem = document.createElement('div');
          newItem.classList.add('new-select__item');
          const newSpan = document.createElement('span');
          newSpan.textContent = selectOption[i].textContent;
          newItem.appendChild(newSpan);
          newItem.setAttribute('data-value', selectOption[i].value);
          selectList.appendChild(newItem);
  
          newItem.addEventListener('click', function() {
              const chooseItem = this.getAttribute('data-value');
  
              selectElement.value = chooseItem;
              selectHead.textContent = this.querySelector('span').textContent;
  
              selectList.style.display = 'none';
              selectHead.classList.remove('on');
          });
      }
  
      const selectItem = selectList.querySelectorAll('.new-select__item');
      selectList.style.display = 'none';
      selectHead.addEventListener('click', function(e) {
        console.log(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.querySelector('.menu-item__title').classList.toggle('on');
          if (!this.classList.contains('on')) {
              this.classList.add('on');
              selectList.style.display = 'block';
  
              selectItem.forEach(function(item) {
                  item.addEventListener('click', function() {
                      const chooseItem = this.getAttribute('data-value');
  
                      selectElement.value = chooseItem;
                      selectHead.textContent = this.querySelector('span').textContent;
  
                      selectList.style.display = 'none';
                      selectHead.classList.remove('on');
                  });
              });
  
          } else {
              this.classList.remove('on');
              selectList.style.display = 'none';
          }
      });
  });
  
  // const menuItems = document.querySelectorAll('.menu-item__title');
  // const selectList = document.querySelector('.new-select__list');
  // const newSelect = document.querySelector('.new-select');
  
  // menuItems.forEach(item => {
  //   item.addEventListener('click', function() {
  //     selectList.style.display = 'block';
  //     newSelect.classList.add('on');
  //   });
  // });
  
  }
}


