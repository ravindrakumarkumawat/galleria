import { ACCESS_KEY } from './Unsplash.config'

const unsplash = `https://api.unsplash.com`

export const allPhotos = `${unsplash}/photos/?client_id=${ACCESS_KEY}`
export const singlePagePhotos = `${unsplash}/photos/?client_id=${ACCESS_KEY}&page=`