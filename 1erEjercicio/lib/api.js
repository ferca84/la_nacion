import React from 'react'
import { slugs } from '../test/dummy-slugs'
import { API_URL } from './constants';

async function fetchAPI(url, options) {

  try {

    const res = await fetch(url, options)

    if (res.status !== 200) {
       return {status: 'error', message: 'Ha ocurrido un error'}
    }

    const data = await res.json()

    return data;

  } catch (err) {
    console.log('Catch error: ' + err);
  }

}

export async function getArticles() {
  const data = await fetchAPI(API_URL, { method: 'GET' });
  //Si no hay articulos, es que hubo un error
  return data.articles ? data.articles : data ;
}

export function getSlugs() {
  // Tengo que devolver un array de objetos donde cada uno tenga el parametro slug
  return slugs.map(slug => {
    return {
      params: {
        slug: slug
      }
    }
  })
}