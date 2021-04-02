export function scrollbarWidth() {
  const div = document.createElement('div');
  div.style.position = 'absolute';
  //把div放到屏幕之外
  div.style.top = div.style.left = '-99999px';
  div.style.width = div.style.height = '100px';
  div.style.overflow = 'scroll';

  document.body.appendChild(div);
  const width = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);

  return width;
}
