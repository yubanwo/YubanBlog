var posts=["posts/wz-2/","posts/wz-1/","posts/wz-3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };