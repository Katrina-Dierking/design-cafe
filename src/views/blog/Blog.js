import React from 'react'
import Layout from '../../components/layout/Layout'
import {blogs} from './data'
import BlogPost from './BlogPost'


const Blog = () => {
  return (
    <Layout title="blog">
      {blogs.map((post, index) => (
        <BlogPost 
          props={post}
          key={index}
          category={post.category}
          title={post.title}
          body={post.body}

        />
      ))}
    </Layout>
  )
}

export default Blog