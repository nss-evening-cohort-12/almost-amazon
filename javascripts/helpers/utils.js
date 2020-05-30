const printToDom = (selector, text) => {
  // selector === #box-id
  // document.querySelector(selector).innerHTML = text;
  // $(`#${idSelector}`).html(text);
  $(selector).html(text);
};

export default { printToDom };


/*
 * Things jQuery replaces:
 * document.*
 * innerHTML
 * classList
 * addEventListener
 */
