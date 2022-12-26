export const sum = (a, b) => {
  return a * b
}

export const btnClose = () => {
  const btn = document.querySelector('.hero__banner_close')
  const banner = document.querySelector('.hero__banner')

  btn.addEventListener('click', () => {
    banner.classList.add('close')
  })
}
