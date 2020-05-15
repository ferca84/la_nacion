import React from 'react';
import Link from 'next/link'

const TagItem = (props) => {return <Link href="/tema/[slug]" as={`/tema/${props.slug}`} ><a>{props.children}</a></Link> }
        
export default TagItem;