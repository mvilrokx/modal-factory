import { divEl, headerEl, sectionEl, footerEl, buttonEl } from './el'

import cssStyles from './style.css'

const modalFactory = (options = {}) => {
  const { styles = {} } = options

  /**
   * Modal structure =
   *    div.modalContainer
   *        div.modalOverlay
   *        div.modalContent
   *            header.modalHeader
   *            section.modalBody
   *            footer.modalFooter
   *        button.modalClose
   */
  const modal = divEl({
    classes: `${cssStyles.modalContainer} ${cssStyles.modalContainerDefaults}`,
    styles: styles.modal,
  })

  const modalOverlay = divEl({
    classes: `${cssStyles.modalOverlay} ${cssStyles.modalOverlayDefaults}`,
    styles: styles.modalOverlay,
  })
  modalOverlay.addEventListener('click', () => modal.hide())

  const modalContent = divEl({
    classes: `${cssStyles.modalContent} ${cssStyles.modalContentDefaults}`,
    styles: styles.modalContent,
  })

  if (options.header) {
    const modalHeader = headerEl({
      classes: `${cssStyles.modalheader} ${cssStyles.modalHeaderDefaults}`,
      styles: styles.modalHeader,
    })
    modalHeader.innerHTML = options.header
    modalContent.appendChild(modalHeader)
  }

  const modalBody = sectionEl({
    classes: `${cssStyles.modalBody} ${cssStyles.modalBodyDefaults}`,
    styles: styles.modalBody,
  })
  modalBody.innerHTML = options.body || ''
  modalContent.appendChild(modalBody)

  if (options.footer) {
    const modalFooter = footerEl({
      classes: `${cssStyles.modalFooter} ${cssStyles.modalFooterDefaults}`,
      styles: styles.modalFooter,
    })
    modalFooter.innerHTML = options.footer
    modalContent.appendChild(modalFooter)
  }

  const modalClose = buttonEl({
    classes: `${cssStyles.modalClose} ${cssStyles.modalCloseDefaults}`,
    styles: styles.modalClose,
  })
  modalClose.textContent = '\u2715'
  modalClose.addEventListener('click', () => modal.hide())


  modal.appendChild(modalOverlay)
  modal.appendChild(modalContent)
  modal.appendChild(modalClose)

  const transitionEndHandler = () => {
    modal.style.display = 'none'
    modal.removeEventListener('transitionend', transitionEndHandler)
  }

  modal.show = () => {
    modal.style.display = 'flex'
    setTimeout(() => modal.classList.add(cssStyles.modalShow), 20)
  }

  modal.hide = () => {
    modal.addEventListener('transitionend', transitionEndHandler)
    modal.classList.remove(cssStyles.modalShow)
  }

  return modal
}

export default modalFactory
