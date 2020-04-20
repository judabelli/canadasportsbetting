window.onload = function() {
    var checkbox = document.getElementById('switch-checkbox');
    var gridContainer = document.getElementById('o-grid-container');
    var card = document.querySelectorAll('.c-card');
    var toogleButton = document.getElementById('sort-by');
    var sortStatus = 0;
    checkbox.addEventListener("change", changeView);
    function changeView()  {
        if (checkbox.checked) {
            gridContainer.classList.remove('o-flex--column');
            gridContainer.classList.add('o-flex--row', 'grid-list');
        }   else {
            gridContainer.classList.remove('o-flex--row', 'grid-list');
            gridContainer.classList.add('o-flex--column');
        }


    }

    function sortByNumber() {
     [].slice.call(card).sort(function(a, b) {
      var nameA = a.getAttribute('data-number').toLowerCase()
      var nameB = b.getAttribute('data-number').toLowerCase()
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
   })
   .forEach(function(el) {el.parentNode.appendChild(el)});
  }
    function sortByName() {
         [].slice.call(card).sort(function(a, b) {
          var nameA = a.getAttribute('data-name').toLowerCase()
          var nameB = b.getAttribute('data-name').toLowerCase()
          return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
       })
       .forEach(function(el) {el.parentNode.appendChild(el)});
    }

    toogleButton.addEventListener('click', function(){
        if (sortStatus == 0) {
            sortByName();
            gridContainer.classList.remove('numerically-sorted');
            gridContainer.classList.add('alphabetically-sorted');
            this.textContent = 'Sort by position ';
            sortStatus = 1;
        } else  {
            sortByNumber();
            gridContainer.classList.remove('alphabetically-sorted');
            gridContainer.classList.add('numerically-sorted');
            this.textContent = 'Sort Alphabetically ';
            sortStatus = 0;
        }
    });
};
