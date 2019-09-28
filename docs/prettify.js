
document.querySelector('button#prettify').addEventListener('click', e => {
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './pretty.css';
  document.head.appendChild(link);
  e.target.parentElement.removeChild(e.target)
});