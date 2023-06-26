'use strict';

const warEl = document.getElementById('war');
const brdngEl = document.getElementById('brdng');
const projectModalEl = document.getElementById('project-modal');

function modalShow(projectName) {
  console.log('Hovered over war div');
  projectModalEl.classList.remove('hidden');
}

function modalHide() {
  console.log('mouseout');
  projectModalEl.classList.add('hidden');
}

warEl.addEventListener('mouseover', modalShow);
projectModalEl.addEventListener('mouseout', modalHide);
