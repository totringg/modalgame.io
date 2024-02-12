'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
//modal windowを開くための 関数定義

const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//modal windowを閉じるための 関数定義
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// どんなボタンを押すとそのボタンのmodal windowを開き、hiddenというクラスで隠せたから

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
// ボタンかwindow外範囲をクリックするとcloseModalというクラスを呼び出す
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// Escapeというボタンを押してwindowを隠せている状態でないとcloseModal関数を呼び出す
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
