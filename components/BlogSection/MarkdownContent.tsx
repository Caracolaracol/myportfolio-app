'use client'
import React, { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

function MarkdownContent({posts, isContent2}:any) {
    const [content1, setContent1] = useState<string>()
    const [content2, setContent2] = useState<string>()

    useEffect(() => {
        const fetchdata = async () => {
            for (let i = 0; i < 2; i++) {
                fetch(`${posts[i].paragraphs}`)
            .then((res) => res.text())
            .then((text) => text.substring(0, 320))
            .then((text) => i == 0 ? setContent1(text.concat('', '...')): setContent2(text.concat('', '...')));   
            }
          }
          fetchdata()
    }, [ posts])
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{`${isContent2 ? content2 :content1}`}</ReactMarkdown>
  )
}

export default MarkdownContent