import { Link } from 'prismic-dom'
import linkResolver from './linkResolver'

export function asLink(field) {
  return Link.url(field, linkResolver)
}

export function asDay(date) {
  const day = new Date(date).getDate().toString()
  return day.padStart(2, '0')
}

export function asMonth(date) {
  return new Date(date).toLocaleString('en-us', { month: 'short' }).toString()
}

export function asYear(date) {
  return new Date(date).getFullYear().toString()
}
