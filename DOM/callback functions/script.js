//callback function

const nameList = [
  { Id: 1, name: "saad", postId: 11, commentId: 10},
  { Id: 2, name: "sabahuddin", postId: 12, commentId: 11}
];

const post = {
  11: ["Post1", "Post2"],
  12: ["Post1", "Post2"],
};

const comments = {
  10: ["Comment1", "Comment2"],
  11: ["Comment1", "Comment2"],
};

const nameExtractor = (id, postExtractor)=>{
  console.log("Extracting Name...");
  setTimeout(() => {
    let postId = NaN
    let nameOf = null
    let commentId = null;
    for(let i=0; i<nameList.length; i++){
      if(nameList[i].Id === id){
        postId = nameList[i].postId;
        nameOf = nameList[i].name;
        commentId = nameList[i].commentId;
        break;
      }
    }
    console.log(`Name is ${nameOf}`);
    postExtractor(postId, commentId);
  }, 3000);
}

const postExtractor = (id, commentId, commentExtractor)=>{
  console.log("Extracting Post ...");
  setTimeout(() => {
    post[id].forEach((element) => {
      console.log(element);
    });
    commentExtractor(commentId);
  }, 2000);
}

const commentExtractor = (id, callback)=>{
  console.log("Extracting Comments ...");
  setTimeout(() => {
    comments[id].forEach((element) => {
      console.log(element);
    });
    callback();
  }, 1000);
}

nameExtractor(1, function (postId, commentId) {
  postExtractor(postId, commentId, function (commentId) {
    commentExtractor(commentId, function(){
      console.log("All the Information Extracted");
    })
  });
});