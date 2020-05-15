import React from 'react'
import { slugs } from '../test/dummy-slugs'
import { API_URL } from './constants';

async function fetchAPI(url, options) {

  try {

    const res = await fetch(url, options)

    const json = await res.json()

    return json;

  } catch (err) {
    console.log('Catch error: ' + err);
  }

}

export async function getArticles() {
  const json = await fetchAPI(API_URL, { method: 'GET' });
  //Si llegara a encontrar problemas, paso un array vacio para que el resto de la página se renderize
  return !json.error ? json.articles : [];
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