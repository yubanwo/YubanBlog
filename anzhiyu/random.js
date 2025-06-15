var posts=["posts/wz-1.html","posts/wz-2.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };