<template>
  <div :class="$style.Wrapper">
    <div :class="$style.Banner">
      <img src="~@/assets/images/about-us-bg.jpg" alt="about us">
    </div>
    <div :class="$style.Container">
      <div :class="$style.Inner">
        <h1 :class="$style.Title">About us</h1>
        <div :class="$style.Content">
          {{
          `
          Perferendis eius molestias magnam voluptatem iusto et consequatur. Dicta et aut et iusto occaecati cum aperiam molestiae. Minima dolores quo necessitatibus illum enim mollitia animi. Illum sed praesentium officia commodi. Est harum laborum ut nihil accusantium. Doloribus non accusamus qui eum unde.\n
          Omnis eaque neque alias repellendus harum vel placeat. Et nulla accusamus excepturi minima et. Rerum doloribus minima nihil possimus rerum ea autem excepturi. Molestiae expedita rem non minus laudantium qui est odio. Est laboriosam earum tempore et hic minus natus libero.\n
          Modi consequuntur voluptatem. Molestiae laudantium aspernatur praesentium dolor. Aut ad similique fuga inventore reiciendis assumenda quis fuga sunt. Reiciendis exercitationem quo aliquid ut doloribus ut eum quibusdam rerum. Odit quae consequatur labore voluptate sed fugit quo dignissimos. Ut accusantium nemo.\n
          Delectus ducimus aspernatur labore quia quis. Laborum velit deserunt libero facilis libero quae. Blanditiis eos ad accusamus consectetur. Esse unde quae occaecati veritatis omnis amet culpa est consectetur. Consequatur repellat ad porro.\n
          Adipisci quo nisi dolor ullam. Eligendi aliquam et amet corporis. Esse doloremque maiores recusandae et. Quaerat aliquam impedit et dolore veritatis at voluptatem quasi. Laboriosam quisquam illum et voluptatum qui distinctio qui. Sapiente illo dolores est voluptatem.
          `
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  seo: {
    title: 'About',
    keywords: 'view spa',
    description: 'This is a view spa'
  }
}
</script>

<style lang="scss" module>
.Wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.Banner {
  height: 300px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.Container {
  flex: 1;
  padding-top: 15px;
  padding-bottom: 15px;
}

.Inner {
  height: 100%;
  background-color: #fff;
}

.Title {
  padding: 15px 0;
  margin: 0;
  font-size: 28px;
  text-align: center;
}

.Content {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  white-space: pre-wrap;
}
</style>
