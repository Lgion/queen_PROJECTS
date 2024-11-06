import React from 'react'
import PricingCard from './PricingCard';
import { CopyMinus } from 'lucide-react';
import {handleEditorClick,handleEditorBlur} from "../utils/handlers"

export default function listCards({$,setter,dataId}) {
    return <>
        {JSON.stringify($)}
        <h2 className="" onClick={handleEditorClick} onBlur={e=>{handleEditorBlur(e,$,setter,dataId)}}>{$.title}</h2>
        <ul className="">
            {$?.cards?.map((item,i) => <PricingCard key={i} {...item} />)}
        </ul>
    </>

}
