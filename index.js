const details = document.querySelectorAll("details");

for (const el of details) {
  // menambahkan listener pada detail, tiap di klik
  el.addEventListener("click", () => {
    // pilih detail yang saya klik
    const yangSayaKlik = el.dataset.satu; // ini yang klik

    // loop over details element
    for (const detail of details) {
      // jika detail elemen tidak sama dengan yang
      // saya klik
      if (detail.dataset.satu !== yangSayaKlik) {
        // maka open = false
        detail.open = false;
      }
    }
  });
}

const navigationArea = document.getElementsByClassName('navigation-area')[0];
const btnResponsive = document.getElementsByClassName('button-menu-responsive')[0];
const toggleBtn = document.getElementById('toggleMenu');

toggleBtn.addEventListener('click', () =>{
  navigationArea.classList.toggle('navigation-area--open')
  btnResponsive.classList.toggle('menu--open')
})

