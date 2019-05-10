export function imageZoom(imgID, resultID, onClick) {
  const defaultResultWidth = 300;
  const defaultResultHeight = 300;
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /* Create lens: */
  lens = document.getElementById('lens');
  if (!lens) {
    lens = document.createElement('div');
    lens.setAttribute('id', 'lens');
    lens.setAttribute('class', 'img-zoom-lens');
    lens.onclick = function () {
      onClick();
    }
  }
  /* Insert lens: */
  img.parentElement.insertBefore(lens, img);
  /* Calculate the ratio between result DIV and lens: */
  if (result.offsetWidth <= 0 || result.offsetHeight <= 0) {
    cx = defaultResultWidth / lens.offsetWidth;
    cy = defaultResultHeight / lens.offsetHeight;
  } else {
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
  }

  /* Set background properties for the result DIV */
  result.style.backgroundImage = 'url(' + img.src + ')';
  result.style.backgroundSize = (img.width * cx) + 'px ' + (img.height * cy) + 'px';

  /* Execute a function when someone moves the cursor over the image, or the lens: */
  lens.addEventListener('mousemove', moveLens);
  img.addEventListener('mousemove', moveLens);

  /* And also for touch screens: */
  lens.addEventListener('touchmove', moveLens);
  img.addEventListener('touchmove', moveLens);

  function moveLens(event) {
    var cursorPos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    event.preventDefault();
    /* Get the cursor's x and y positions: */
    cursorPos = getCursorPos(event);
    /* Calculate the position of the lens: */
    x = cursorPos.x - lens.offsetWidth / 2;
    y = cursorPos.y - lens.offsetHeight / 2;
    /* Prevent the lens from being positioned outside the image: */
    if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
    if (x < 0) { x = 0; }
    if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
    if (y < 0) { y = 0; }
    /* Set the position of the lens: */
    lens.style.left = x + 'px';
    lens.style.top = y + 'px';
    /* Display what the lens 'sees': */
    result.style.backgroundPosition = '-' + (x * cx) + 'px -' + (y * cy) + 'px';
  }

  function getCursorPos(event) {
    var imagePos, x = 0, y = 0;
    event = event || window.event;
    /* Get the x and y positions of the image: */
    imagePos = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
		x = event.pageX - imagePos.left;
		y = event.pageY - imagePos.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}
