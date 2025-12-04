export default function CardPost({newPost}){
    return (
        <>
        {newPost.map((post, index) =>
          <div className="card my-4 border-secondary">
            <div className="card-header bg-secondary text-white">
              <h3 className="mb-0">{post.titolo}</h3>
              <small className="opacity-75">{post.autore}</small>
            </div>
            <div className="card-body">
              <p className="card-text">
                {post.testo}
              </p>
            </div>
          </div>)}
          </>
    )
}