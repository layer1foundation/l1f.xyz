"use client";

import React, { useEffect, useState } from "react";
import { type IBlog } from "@/actions/fetch-blog";
import Post from "@/components/Post";
import Segemnt from "@/components/Segment";
import Chapter from "@/components/Chapter";
import copy from "@/constants/copy/BRC20";
import Wrapper from "@/components/Background";
import { useCMS } from "@/stores/cms";
import Preview from "@/components/Preview";

export default function BlogPage() {
    const { blogPosts, loading } = useCMS();
    return loading ? (
        <div className="flex flex-col items-center justify-center w-full">
            <Wrapper className="flex flex-col justify-center items-center px-4 md:px-10 md:pt-10">
                <div className="w-full">
                    <Preview loading={true}></Preview>
                    <Preview loading={true}></Preview>
                    <Preview loading={true}></Preview>
                </div>
            </Wrapper>
        </div>
    ) : (
        <div className="flex flex-col items-center justify-center w-full">
            <Wrapper className="flex flex-col justify-center items-center px-4 md:px-10 md:pt-10">
                {Array.isArray(blogPosts) &&
                    blogPosts.map((blog: IBlog, i: number) => (
                        <Preview key={i} post={blog.attributes} id={blog.id} />
                    ))}

                {/* <Preview page={sopcopy} ></Preview>
                <Preview page={resolutioncopy}></Preview> */}
            </Wrapper>
            <Segemnt scroll={false} className="pt-10">
                <Chapter chapter={copy.BRC20.chapter2}></Chapter>
            </Segemnt>
            <Segemnt scroll={false} className="pt-10">
                <Chapter chapter={copy.BRC20.chapter2}></Chapter>
            </Segemnt>
        </div>
    );
}
