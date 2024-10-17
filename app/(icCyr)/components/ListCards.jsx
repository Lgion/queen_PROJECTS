import React from 'react'
import PricingCard from './PricingCard';
import { CopyMinus } from 'lucide-react';

const ok = (e,$data) => {
  e.target.contentEditable=true
  console.log($data);
}

export default function listCards({$data,setter}) {
    console.log($data);
    return <>
            {JSON.stringify($data)}
            <h2 className="" onClick={e=>{ok(e,$data)}} onBlur={e=>{
                $data.title = e.target.textContent
                console.log($data);
                setter(prev => {
                    console.log($data);
                    return {mainHome:{...{...prev.mainHome}, ...$data}}
                })
            }}>{$data.title}</h2>
            <ul className="">
                {$data?.cards?.map((item,i) => <PricingCard key={i} {...item} />)}
            </ul>
        </>

}
