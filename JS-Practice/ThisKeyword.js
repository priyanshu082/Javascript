//Basically this refers to window object 

const video={
    title:"a",
    tags:['a','b','c'],
    showTags(){
       this.tags.forEach(function(tag){
        console.log(this.showTags,tag)
       },this)
    }
}

video.showTags()

const video2={
    title:"a",
    tags:['a','b','c'],
    showTags(){
       this.tags.forEach((tag)=>{
        console.log(this,tag)
       })
    }
}

// video2.showTags()