/* eslint-disable */
import styles from '../main.scss'
/* eslint-enable */

import seriesData from './seriesSource.js'
import { Categories } from './filter.js'
import { Grid } from './grid.js'
import DataRetriever from './DataRetriever.js'

const categories = []
seriesData.forEach(element => {
  if (!categories.includes(element.category)) {
    categories.push(element.category)
  }
})

const URL = 'https://api.myjson.com/bins/8g3o5'
DataRetriever.get(URL, (data) => {
  const grid = new Grid(document.querySelector('.series'), data)
  function onChange (currentCategory) {
    grid.updateGrid(currentCategory)
  }
/* eslint-disable */  
new Categories(document.querySelector('.filter__list'), categories, onChange)
/* eslint-enable */
})
