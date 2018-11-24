import Ember from 'ember';

export default Ember.Service.extend({
  posts: null,

  init() {
    this._super();

    this.posts = [
      {
        id: '1',
        title: 'Welcome to My Blog',
        author: 'ajay',
        body: `
          <p>Blogging is a cool thing. I enjoy it.</p>
          <p>Please leave some comments below.</p>
        `,
        comments: [
          {
            id: '101',
            author: 'san',
            comment: `I agree`
          }
        ]
      },
      {
        id: '2',
        title: 'On vacation',
        author: 'sha',
        body: `
          <p>I want to post the photos soon..</p>
          <p>Wonderful journey.</p>
        `,
        comments: [
          {
            id: '102',
            author: 'san',
            comment: `Great`
          }
        ]
      }
    ];
  }
});