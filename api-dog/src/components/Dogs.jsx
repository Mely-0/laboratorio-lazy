import React from 'react'
import useSWR from "swr"
import './css/styles.css';
import { Card } from './Card'
const fetcher = (...args) => fetch(...args).then(res => res.json())


export const Dogs = () => {

    const { data, error } = useSWR("https://api.thedogapi.com/v1/images/search?limit=2&page=100&order=DESC", fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
return (
    <div className='cont-tarjeta'>
        <Card link={data[0].url}/>
        <Card link={data[1].url}/>
    </div>
)
}