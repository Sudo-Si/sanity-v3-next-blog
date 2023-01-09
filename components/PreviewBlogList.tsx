"use client ";
import { usePreview } from "../lib/sanity.preview";
import BlogList from "./BlogList";

type Props ={
    query: string;
};

//takes in props that get destructured to get query 
export default function PreviewBlogList({query}: Props){
    const posts = usePreview(null, query);

    // console.log("LOADING posts...", posts);
    return <BlogList posts={posts} />;

}