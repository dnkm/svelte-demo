import { clubs } from '$lib/clubs';

export function load({ params }) {
  return ({
    club: clubs.find(v => v.slug === params.clubid)
  })
}