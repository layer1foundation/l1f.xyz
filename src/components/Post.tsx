

import React from "react";
import { EXTERNAL_LINKS } from "@/constants/links";
import { IBlogPostAttributes } from "@/actions/fetch-blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Author } from "./Author";
import  SyntaxHighlighter  from "react-syntax-highlighter";


export default function Post({ post }: { post: IBlogPostAttributes }) {

    const author = post?.author;
    const imageUrl = post?.cover ? `${EXTERNAL_LINKS.strapi}${post.cover.data.attributes.formats.large.url}` : "";
    return (
        <div className="w-full px-4 md:px-10 max-w-7xl post font-suisse">
            <div className="w-full">
                    {imageUrl ? 
                    <div className="w-full h-64 md:h-96 overflow-hidden relative">
                    <img
                        src={imageUrl}
                        alt="L1F Blog Post"
                        width={1300}
                        height={300}
                        className="absolute h-full w-full object-cover object-center "
                    />
                    </div> : null}
                <div className="md:px-48 py-6">
                    <div className=" ">
                        <h1 className="mt-8 font-suisse">{post?.title}</h1>
                        <Author img={author ? author.image : '/apple-touch-icon.png'} name={author ? author : "Anon"} description={post.description ? post?.description : "L1F"} readtime={"5 min"} date={ post.publishedAt ? post.publishedAt : ""}/>
                    </div>
                    <ReactMarkdown remarkPlugins={[remarkGfm]} className="mt-10">{post?.content}</ReactMarkdown>
                    
                    
                </div>
            </div>
        </div>
    );
}
