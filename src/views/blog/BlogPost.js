import React from 'react'
import '../../assets/styling/blog.scss'

const BlogPost = ({category, title, body}) => {
  return (
    <section className='postCard'>
        <p>Category: {category}</p>
        <h1>{title.toUpperCase()}</h1>
        {body.map((item) => {
            return (
                <div className='blogBody'>
                {item.p1}
                <br></br>
                {item.intro}
                </div>
            )
        })}
     
        
    </section>
  )
}

export default BlogPost