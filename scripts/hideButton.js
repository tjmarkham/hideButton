'use strict';

function hideButton() {
  let buttonsToHide = document.querySelectorAll('[data-qa-selector="delete_merged_branches_button"]');

  if (buttonsToHide.length > 0) {
    buttonsToHide.forEach((buttonToHide) => {
      buttonToHide.hidden = true;
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  hideButton();
});
