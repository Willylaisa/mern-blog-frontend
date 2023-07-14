import React from 'react'
import "./blog.css"
import BlogPost from './BlogPost';



export default function Blog() {
    const [blogPosts, setBlogPosts] = React.useState( [
        { id: 1, title: 'Post 1', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        ,image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/15951/production/_117310488_16.jpg"
        ,  likes: 0, comments: [] },



        { id: 2, title: 'Post 2', content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?", 

        image: 'https://cdn.pixabay.com/photo/2023/05/24/21/26/car-8015901_1280.jpg', likes: 0, comments: [] },
        { id: 3, title: 'Post 3', content: '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."', 
        image: 'https://c1.wallpaperflare.com/preview/960/458/420/automotive-cool-red-sports-car.jpg', likes: 0, comments: [] },
      ]);

      const [search, setSearch]= React.useState('')
      const [searchResults, setSearchResults] = React.useState([])
      React.useEffect(
          () => {
            const filteredResults = blogPosts.filter((post) => post.content.toLowerCase().includes(search.toLowerCase())
            || post.title.toLowerCase().includes(search.toLowerCase()));
        
  
              setSearchResults(filteredResults.reverse())
          },[blogPosts, search])
      
        const handleLike = (postId) => {
          setBlogPosts((prevPosts) =>
            prevPosts.map((post) => {
              if (post.id === postId) {
                return { ...post, likes: post.likes + 1 };
              }
              return post;
            })
          );
        };
      
        const handleAddComment = (postId, comment) => {
          setBlogPosts((prevPosts) =>
            prevPosts.map((post) => {
              if (post.id === postId) {
                return { ...post, comments: [...post.comments, comment] };
              }
              return post;
            })
          );
        };
      
    return (
        <div className='Blog--Container'>
            <div className='searchBar'>
            <form className='searchForm' 
                  onSubmit={function(event){
                     event.preventDefault()
                   }}>
                   <input
                   className='searchInput'
                   id='search'
                   type="text"
                   placeholder='Search for'
                   onChange={function(event){
                    setSearch(event.target.value)
                   }}
                   />
                   <button className='searchbutton'><i className='fa fa-search'></i></button>
           </form>
           </div>

        <h1>Welcome to My Blogging Website</h1>
        <div className="blog-posts">
          {searchResults.map((post) => (
            <BlogPost
              key={post.id}
              post={post}
              onLike={handleLike}
              onAddComment={handleAddComment}
            />
          ))}
        </div>
      </div>
    )
}