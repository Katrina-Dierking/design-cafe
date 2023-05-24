import React from 'react'
import '../../assets/styling/blog.scss'

const BlogPost = ({category, title, body}) => {
  return (
    <section className='postCard'>
        <p>Category: {category}</p>
        <h1>{title.toUpperCase()}</h1>
     
        
    </section>
  )
}

export default BlogPost