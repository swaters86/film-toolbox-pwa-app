<template>
    <div class="page">
        <h1 class="page-title">{{category}}</h1>
        <div class="item" v-for="(item, index) in items"  :key="index">
            <figure class="item-image-container">
                <img class="item-image" :src="item.imageSrc" :alt="item.imageAlt">
            </figure>
            <div class="item-details">
                <h2 class="item-title">{{item.title}}</h2>
                <p class="item-description">
                    {{item.description}}
                </p>
                <a href="#" class="item-checkout-btn" title="">checkout</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .page {
        background: #efefef;
        padding: 10px;
    }

    .item {
        padding: 20px;
        margin: 0 auto;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        background: #fff;
    }

    .item-image-container {
        width:100%;
        height: 200px;
        border: 1px #d0d0d0 solid;
        overflow: hidden; 
        margin: 0;
    }

    .item-image {
        display: block;
        width: 100%;
        margin: -10.875% 0;
    }

    .item-header {
        font-size: 1.2rem;
    }

    .item-details {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
    }

    .item-title, 
    .item-description {
        width: 100%;
        flex-basis: 100%;
    }

    .page-title,
    .item-title {
        margin: 10px 0; 
        text-transform: capitalize;
    }

    .item-checkout-btn {
        display: inline-block;
        width: 150px;
        height: 50px;
        float: right;
        margin: 10px 0 10px auto;
        background: #a7ff7a;
        text-transform: capitalize;
        text-align: center;
        color: #333;
        line-height: 50px;;
    }
</style>

<script>

export default {
  data: () => ({
    items: [
        {
            title: 'black magic cinema camera 4k', 
            description: 'Vivamus suscipit mauris quis feugiat tristique. Nunc molestie',
            imageSrc: '/images/cameras/blackmagic-production-camera-4k.jpg',
            imageAlt: 'A square looking camera with rounded corners.',
        },
        {
            title: 'black magic cinema camera 4k', 
            description: 'Vivamus suscipit mauris quis feugiat tristique. Nunc molestie',
            imageSrc: '/images/cameras/blackmagic-production-camera-4k.jpg',
            imageAlt: 'A square looking camera with rounded corners.',
        },
        {
            title: 'black magic cinema camera 4k', 
            description: 'Vivamus suscipit mauris quis feugiat tristique. Nunc molestie',
            imageSrc: '/images/cameras/blackmagic-production-camera-4k.jpg',
            imageAlt: 'A square looking camera with rounded corners.',
        },
        {
            title: 'Black Magic Cinema Camera 4k', 
            description: 'Vivamus suscipit mauris quis feugiat tristique. Nunc molestie',
            imageSrc: '/images/cameras/blackmagic-production-camera-4k.jpg',
            imageAlt: 'A square looking camera with rounded corners.',
        },
    ]
  }),
  props: ['category', 'id'],
}
</script>