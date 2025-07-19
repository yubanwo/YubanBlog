var posts=["posts/wz-1/","posts/wz-10/","posts/wz-12/","posts/wz-11/","posts/wz-13/","posts/wz-2/","posts/wz-3/","posts/wz-4/","posts/wz-5/","posts/wz-6/","posts/wz-7/","posts/wz-8/","posts/wz-9/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };