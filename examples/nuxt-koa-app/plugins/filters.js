import Vue from 'vue'
import fecha from 'fecha'

Vue.filter('formartDate', (date, formart) => {
  return fecha.format(new Date(date), formart)
})
