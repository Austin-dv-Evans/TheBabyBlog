import BlogList from '../components/BlogList'
import useFetch from '../hooks/useFetch'

const Home = () => {

  const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs")

  return (
    <div className="home">
      {error && <div>{ error }</div> }
      { isLoading && <div>Loading....</div> }
      {blogs && 
        <>
          <BlogList
            blogs={blogs}
            title="All Blogs!"
          />
          {/* <BlogList
            blogs={blogs.filter((blog) => blog.author === "Renee")}
            title="Renee's Blogs"
          />
          <BlogList
            blogs={blogs.filter((blog) => blog.author === "Austin")}
            title="Austin's Blogs"
          /> */}
        </> 
      }
    </div>
  )
}

export default Home
