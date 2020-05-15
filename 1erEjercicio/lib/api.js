import React from 'react'
import {slugs} from '../test/dummy-slugs'
import { API_URL } from './constants';

async function fetchAPI(url, options) {

  const res = await fetch(url, options)

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Error en traer datos de la API')
  }

  return json;
}

export async function getArticles() {
  //console.log('pase por getArticles')
  const options = {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  };

  const data = await fetchAPI(API_URL, options);
  //Si no llegara a encontrarse articulos, paso un array vacio para que el resto de la página se renderize
  return data.articles ? data.articles : [];
}

export function getSlugs() {
  const data = slugs;
  return data;
}