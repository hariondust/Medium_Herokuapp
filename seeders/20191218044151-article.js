'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('articles', [
      {
        title:"OK Boomer!",
        content:"content",
        image:"https://cdn-images-1.medium.com/fit/c/110/110/1*MoyfuMp9gduBYY0rJAe8VA.jpeg",
        category_id:1,
        is_published:1,
        is_archived:0,
        user_id:1,
        createdAt:new Date,
        updatedAt:new Date,
      },
      {
        title:"OK Boomer!",
        content:"content",
        image:"https://cdn-images-1.medium.com/fit/c/110/110/1*MoyfuMp9gduBYY0rJAe8VA.jpeg",
        category_id:1,
        is_published:1,
        is_archived:0,
        user_id:1,
        createdAt:new Date,
        updatedAt:new Date,
      },
      {
        title:"OK Boomer!",
        content:"content",
        image:"https://cdn-images-1.medium.com/fit/c/110/110/1*MoyfuMp9gduBYY0rJAe8VA.jpeg",
        category_id:1,
        is_published:1,
        is_archived:0,
        user_id:1,
        createdAt:new Date,
        updatedAt:new Date,
      },
      {
        title:"OK Boomer!",
        content:"content",
        image:"https://cdn-images-1.medium.com/fit/c/110/110/1*MoyfuMp9gduBYY0rJAe8VA.jpeg",
        category_id:1,
        is_published:1,
        is_archived:0,
        user_id:1,
        createdAt:new Date,
        updatedAt:new Date,
      },
      {
        title:"OK Boomer!",
        content:"content",
        image:"https://cdn-images-1.medium.com/fit/c/110/110/1*MoyfuMp9gduBYY0rJAe8VA.jpeg",
        category_id:1,
        is_published:1,
        is_archived:0,
        user_id:1,
        createdAt:new Date,
        updatedAt:new Date,
      },
      {
        title:"OK Boomer!",
        content:"content",
        image:"https://cdn-images-1.medium.com/fit/c/110/110/1*MoyfuMp9gduBYY0rJAe8VA.jpeg",
        category_id:1,
        is_published:1,
        is_archived:0,
        user_id:1,
        createdAt:new Date,
        updatedAt:new Date,
      },
      {
        title:"OK Boomer!",
        content:"content",
        image:"https://cdn-images-1.medium.com/fit/c/110/110/1*MoyfuMp9gduBYY0rJAe8VA.jpeg",
        category_id:1,
        is_published:1,
        is_archived:0,
        user_id:1,
        createdAt:new Date,
        updatedAt:new Date,
      },
      {
        title:"OK Boomer!",
        content:"content",
        image:"https://cdn-images-1.medium.com/fit/c/110/110/1*MoyfuMp9gduBYY0rJAe8VA.jpeg",
        category_id:1,
        is_published:1,
        is_archived:0,
        user_id:1,
        createdAt:new Date,
        updatedAt:new Date,
      },
      {
        title:"OK Boomer!",
        content:"content",
        image:"https://cdn-images-1.medium.com/fit/c/110/110/1*MoyfuMp9gduBYY0rJAe8VA.jpeg",
        category_id:1,
        is_published:1,
        is_archived:0,
        user_id:1,
        createdAt:new Date,
        updatedAt:new Date,
      },
      {
        title:"OK Boomer!",
        content:"content",
        image:"https://cdn-images-1.medium.com/fit/c/110/110/1*MoyfuMp9gduBYY0rJAe8VA.jpeg",
        category_id:1,
        is_published:1,
        is_archived:0,
        user_id:1,
        createdAt:new Date,
        updatedAt:new Date,
      },
      {
        title:"OK Boomer!",
        content:"content",
        image:"https://cdn-images-1.medium.com/fit/c/110/110/1*MoyfuMp9gduBYY0rJAe8VA.jpeg",
        category_id:1,
        is_published:1,
        is_archived:0,
        user_id:1,
        createdAt:new Date,
        updatedAt:new Date,
      },
      {
        title:"OK Boomer!",
        content:"content",
        image:"https://cdn-images-1.medium.com/fit/c/110/110/1*MoyfuMp9gduBYY0rJAe8VA.jpeg",
        category_id:1,
        is_published:1,
        is_archived:0,
        user_id:1,
        createdAt:new Date,
        updatedAt:new Date,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('articles', null, {});
  }
};
