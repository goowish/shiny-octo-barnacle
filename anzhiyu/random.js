var posts=["2025/09/13/本站的起点-一个简单的事情之源/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };