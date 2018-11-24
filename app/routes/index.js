
import Route from '@ember/routing/route'; 

export default Route.extend({

    model: function(params) {
    	 let  companies = [{
      "name" : "Google",
      "headquarters": "Mountain View",
      "revenue":"59b"
      },{
        "name" : "Facebook",
        "headquarters":"Menlo Park",
        "revenue":"7b"
      },{
        "name" : "twitter",
        "revenue": "664m",
        "headquarters":"San Francisco"
      }];
       let  quiz = [{
      "question" : "Google",
      "avatar": "https://randomuser.me/api/portraits/thumb/lego/3.jpg",
      "asked":"59b"
      },{
        "question" : "Facebook",
        "avatar":"https://randomuser.me/api/portraits/thumb/lego/3.jpg",
        "asked":"7b"
      },{
        "question" : "twitter",
        "avatar": "https://randomuser.me/api/portraits/thumb/lego/3.jpg",
        "asked":"San Francisco"
      },{
      "question" : "Google",
      "avatar": "https://randomuser.me/api/portraits/thumb/lego/3.jpg",
      "asked":"59b"
      },{
        "question" : "Facebook",
        "avatar":"https://randomuser.me/api/portraits/thumb/lego/3.jpg",
        "asked":"7b"
      },{
        "question" : "twitter",
        "avatar": "https://randomuser.me/api/portraits/thumb/lego/3.jpg",
        "asked":"San Francisco"
      },{
      "question" : "Google",
      "avatar": "https://randomuser.me/api/portraits/thumb/lego/3.jpg",
      "asked":"59b"
      },{
        "question" : "Facebook",
        "avatar":"https://randomuser.me/api/portraits/thumb/lego/3.jpg",
        "asked":"7b"
      },{
        "question" : "twitter",
        "avatar": "https://randomuser.me/api/portraits/thumb/lego/3.jpg",
        "asked":"San Francisco"
      }];
      let formData=this.store.findAll('question');
        console.log("model fn @ Route.") ;
         return this.store.findAll('question');
       // return ['Company Name', 'HeadQueaters', 'Revenue'];
      /* return {
        name: "Ravi Kumar",
        avatar: "https://randomuser.me/api/portraits/thumb/lego/3.jpg",
        bio: "Famous painter" 
       
          };*/
    },
     redirect: function(){
    window.console.log("redirect() @ routes/index.js")  ;
 //   this.transitionTo("commits.index");
  },

     actions:{        
        postQuestion: function(){
            var that = this;
           
            var question = that.store.createRecord("question",{
                "question": that.get("controller.question"),
                "avatar": that.get("controller.avatar"),
                "asked": that.get("controller.asked"),
                "comment": that.get("controller.comment"),
            });
            
          /*  var author = that.store.createRecord("author",{
                "firstName": that.get("controller.firstName"),
                "lastName": that.get("controller.lastName"),
                "bio": that.get("controller.bio")
            });

            var book =  that.store.createRecord("book",{
                "title": that.get("controller.title"),
                "isbn": that.get("controller.isbn"),
                "pages": that.get("controller.pages"),
                "description": that.get("controller.description")                
            });*/

            question.save().then(function(quizFromDB){ 
                
               Ember.set(this.get('model'),"formData",quizFromDB);
                
             /*   author.save().then(function(authorFromServer){
                    
                    //Set The Author to the books
                    book.get("authors").then(function(authors){
                        authors.pushObject(authorFromServer);
                    });

                    //Save the book 
                    book.save().then(function(book){
                        that.transitionTo('books.book',book);
                    });
                });
            }); */
            
        });
    },
        saveQuestion(params) {
      var newQuestion = this.store
                 .createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
console.log("in Route.") ;
