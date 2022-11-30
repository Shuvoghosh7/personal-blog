import React from 'react';
import { useQuery } from 'react-query';
import BlogsList from './BlogsList';
import './Blogs.css'
const Blogs = () => {
    const { isLoading, error, data: blogs } = useQuery('blogs', () =>
        fetch('http://localhost:5000/api/v1/blogs').then(res =>
            res.json()
        )
    )
    console.log(blogs)
    if (isLoading) {
        return 'Loading...'
    }
    return (
        <div className='mt-12'>
            {
                blogs?.map(blog => <BlogsList
                    key={blog._id}
                    blog={blog}
                />)
            }
        </div>
    );
};

export default Blogs;