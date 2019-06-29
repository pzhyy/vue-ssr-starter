const faker = require('faker')
const _ = require('lodash')

module.exports = () => {
  return {
    users: _.times(100, n => {
      return {
        id: n + 1,
        name: faker.name.findName(),
        avatar: faker.image.avatar()
      }
    }),
    authors: _.times(10, n => {
      return {
        id: n + 1,
        name: faker.name.findName(),
        avatar: faker.image.avatar()
      }
    }),
    posts: _.times(100, n => {
      return {
        id: n + 1,
        title: faker.lorem.sentence(),
        summary: faker.lorem.sentences(),
        content: faker.lorem.paragraphs(),
        category: faker.lorem.word(),
        authorId: faker.random.number({ min: 1, max: 10 }),
        image: faker.image.image(640, 320),
        viewCount: faker.random.number({ min: 1000, max: 10000 }),
        likeCount: faker.random.number({ min: 0, max: 1000 }),
        createdAt: faker.date.recent(10),
        updatedAt: faker.date.recent(1)
      }
    }),
    comments: _.times(100, n => {
      return {
        id: n + 1,
        postId: faker.random.number({ min: 1, max: 100 }),
        userId: faker.random.number({ min: 1, max: 100 }),
        content: faker.lorem.sentences(),
        likeCount: faker.random.number({ min: 0, max: 1000 }),
        createdAt: faker.date.recent(10),
        updatedAt: faker.date.recent(1)
      }
    })
  }
}
