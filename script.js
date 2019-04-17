var count = 0;

var colors = ['green', 'red', 'blue', 'yellow', 'pink'];

var elem = document.querySelector('.block');

elem.addEventListener('click', function() {
  elem.style.background = colors[count];

  if (count === colors.length - 1) {
    count = 0
  } else {
    count = count + 1;
  };

  // Короткая запись условия if else
  // count = (count === colors.length - 1) ? 0 : count + 1
});