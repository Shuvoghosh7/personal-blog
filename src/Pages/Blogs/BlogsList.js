import React from 'react';
import blogsTitle from '../../Images/Author-50x50.jpg'
const BlogsList = ({ blog }) => {
    const { imageUrl, blogTitle, blogDate,blogDescription} = blog
    console.log(imageUrl)
    return (
        <div className='my-5'>
            <div className='blog_post_banner'>
                <img src={`http://localhost:5000/api/v1/${imageUrl}`} alt="" />
            </div>
            <div className='lg:ml-24'>
                <p className='blog_post_title'>{blogTitle}</p>

                <div className='lg:flex items-center'>
                    <div className='blog_meta_author flex items-center'>
                        <img src={blogsTitle} alt="" />
                        <p className='ml-3'>Shuvo Gosh</p>
                    </div>
                    <p className='lg:ml-12 my-1'>{blogDate}</p>
                    <p className='lg:ml-12 blog-Comments'><span>5</span> Comments</p>
                </div>
                <p className='lg:w-[700px] description'>{blogDescription.slice(0, 350)}...</p>
                <div>
                    <button className='continu-btn'>Continue Reading</button>
                </div>
            </div>
        </div>
    );
};

export default BlogsList;