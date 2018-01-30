export class Gallery {
    constructor (instance, data) {
      this.data = data
      this.cont = 0
      this.instance = instance
      this.elements = {}
      this.elements.imgContainer = this.instance.querySelector('.gallery__image-container')
      this.createImages(this.elements.imgContainer)
      this.elements.dots = this.instance.querySelector('.gallery__dots-list')
      this.createDots(this.elements.dots)
      this.elements.arrows = this.instance.querySelectorAll('.gallery__arrows-container-element')
      this.elements.navegators = this.instance.querySelectorAll('[data-use]')
      this.controlArrows(this.elements.imgs, this.elements.arrows)
      this.setGalleryMovement(this.elements.navegators)
    }
  
    static get contentStructure () {
      return {
        dot: ` <li class="gallery__dots"> <button data-use='navegation' class="gallery__dots__button"></button> </li>`,
        imgs: `<li class="gallery__image-container__item"><img class="gallery__image" alt="a image of nature" src="{src}"/></li>`
      }
    }

    static get elementState () {
        return {
          dotSelected: (`gallery__dots--selected`),
          imageEnable: (`gallery__image--enable`),
          arrowEnable: (`gallery__arrows-container-element--enable`)
        }
      }
  
    createImages (imgContainer) {
      let imgArray = this.data.map(element => {
        return Gallery.contentStructure.imgs.replace('{src}', element.url)
      })
      imgContainer.innerHTML = imgArray.join('')
      this.elements.imgs = this.instance.querySelectorAll('.gallery__image')
      this.elements.imgs[0].classList.add(Gallery.elementState.imageEnable)
    }
  
    createDots (dotsContainer) {
      let dotsArray = this.data.map(element => {
        return Gallery.contentStructure.dot
      })
      dotsContainer.innerHTML = dotsArray.join('')
      this.elements.dotBtn = this.instance.querySelectorAll('.gallery__dots__button')
      this.elements.dotBtn[0].classList.add(Gallery.elementState.dotSelected)
    }
  
    controlArrows (imgs, arrows) {
      if (this.cont >= 0 && this.cont < imgs.length - 1) {
        arrows[1].classList.add(Gallery.elementState.arrowEnable)
      } else {
        arrows[1].classList.remove(Gallery.elementState.arrowEnable)
      }
      if (this.cont > 0 && this.cont <= imgs.length - 1) {
        arrows[0].classList.add(Gallery.elementState.arrowEnable)
      } else {
        arrows[0].classList.remove(Gallery.elementState.arrowEnable)
      }
    }
  
    setGalleryMovement (navegators) {
      this.instance.addEventListener('keydown', this.changeImages.bind(this))
      for (let i = 0; i < navegators.length; i++) {
        navegators[i].addEventListener('click', this.changeImages.bind(this))
      }
    }
    changeImages (event) {
      const maxCont = this.cont < this.elements.imgs.length - 1
      const minCont = this.cont >= 0
      const element = event.currentTarget
      const kbCode = event.key
      console.log(kbCode)
      element.focus()
      if (element.classList.contains('gallery__arrows-container--left')) {
        if (this.cont <= this.elements.imgs.length - 1 && this.cont > 0) {
          this.revealPreviousImage(this.cont)
        }
      } else if (element.classList.contains('gallery__arrows-container--right')) {
        if (minCont && maxCont) {
          this.revealNextImage(this.cont)
        }
      } else if (element.classList.contains('gallery__dots__button')) {
        const dotIndex = Array.from(this.elements.dotBtn).indexOf(element)
        this.revealSpecificImage(dotIndex)
      } else if (kbCode === 'ArrowLeft') {
        this.revealPreviousImage(this.cont)
      } else if (kbCode === 'ArrowRight') {
        this.revealNextImage(this.cont)
      }
    }
  
    revealPreviousImage (newPosition) {
      this.updateDotState('previous', newPosition)
      this.elements.imgs[newPosition].classList.remove(Gallery.elementState.imageEnable)
      this.elements.imgs[--newPosition].classList.add(Gallery.elementState.imageEnable)
      this.cont--
      this.controlArrows(this.elements.imgs, this.elements.arrows)
    }
  
    revealNextImage (newPosition) {
      this.updateDotState('next', newPosition)
      this.elements.imgs[newPosition].classList.remove(Gallery.elementState.imageEnable)
      this.elements.imgs[++newPosition].classList.add(Gallery.elementState.imageEnable)
      this.cont++
      this.controlArrows(this.elements.imgs, this.elements.arrows)
    }
  
    revealSpecificImage (selectedPosition) {
      this.updateDotState('specific', selectedPosition)
      this.elements.imgs[this.cont].classList.remove(Gallery.elementState.imageEnable)
      this.elements.imgs[selectedPosition].classList.add(Gallery.elementState.imageEnable)
      this.cont = selectedPosition
      this.controlArrows(this.elements.imgs, this.elements.arrows)
    }
  
    updateDotState (option, newPosition) {
      if (option === 'next') {
        this.elements.dotBtn[newPosition].classList.remove(Gallery.elementState.dotSelected)
        this.elements.dotBtn[++newPosition].classList.add(Gallery.elementState.dotSelected)
      } else if (option === 'previous') {
        this.elements.dotBtn[newPosition].classList.remove(Gallery.elementState.dotSelected)
        this.elements.dotBtn[--newPosition].classList.add(Gallery.elementState.dotSelected)
      } else if (option === 'specific') {
        this.elements.dotBtn[this.cont].classList.remove(Gallery.elementState.dotSelected)
        this.elements.dotBtn[newPosition].classList.add(Gallery.elementState.dotSelected)
      }
    }
  }
  