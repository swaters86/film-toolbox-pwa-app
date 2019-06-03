<template>
  <section class="panels">
    <div class="panel" v-for="(link, index) in links" :key="index">
      <div class="panel-content">
        <router-link :to="link.to">{{link.name}}</router-link>
      </div>
      <footer class="panel-footer">
             <router-link :to="link.to">
              {{link.count}} links &amp; counting. <SVGIconRightArrow color="#333" />
             </router-link>
      </footer>
    </div>
  </section>
</template>

<style scoped>
  .panels {
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between; 
  }

  .panel { 
    width: 200px;
    margin-top: 10px;
    background: #333;
    text-align: center; 
  }

  .panel .panel-content a:link, .panel .panel-content a:visited, .panel .panel-content a:active {
    color: #fff;
    font-size: 1.5rem;
  }

  .panel-content {
    line-height: 150px;
    height: 150px;
  }

  .panel-footer {
    background: #efefef;
    padding: 10px 0;
  }
  .panel-footer:hover {
    background: #a7ff7a;
    transition: background 2s;
  }

  .panel-footer .count-message {
      color: #333;
      text-decoration: none;
  }

  .panel-footer .count-message .svg-icon {
      position: relative;
      top: 7px;
      left: 6px;
  }
  
  @media screen and (max-width: 375px) {
    .panel {
      width: 175px;
    }

    .panel-footer .count-message .svg-icon {
      position: relative;
      top: 7px;
      left: 0px;
    }
  }
</style>

<script>
import SVGIconRightArrow from '@/components/SVGIconRightArrow'

export default {
  data: () => ({
    links: [
      {
        name: 'Cameras',
        to: '/cameras', 
        count: 10,
      },
      {
        name: 'Gaffer\'s Tape',
        to: '/gaffers-tape', 
        count: 15, 
      },
      {
        name: 'Bags',
        to: '/bags', 
        count: 15, 
      },
      {
        name: 'Audio',
        to: '/audio',
        count: 32, 
      }, 
      {
        name: 'Mobile Apps',
        to: '/mobile-apps',
        count: 10, 
      }, 
      {
        name: 'Screen Writing',
        to: '/screen-writing', 
        count: 45, 
      }, 
      {
        name: 'Blogs',
        to: '/blogs',
        count: 100, 

      }, 
      {
        name: 'Misc. Websites',
        to: '/misc-websites',
        count: 100, 

      }, 
      {
        name: 'Sliders',
        to: '/sliders',
        count: 10, 

      }, 
      {
        name: 'Stabilizers',
        to: '/stabilizers',
        count: 19, 

      }, 
      {
        name: 'Lighting',
        to: '/lighting',
        count: 5, 
      },
      {
        name: 'Misc. Gear',
        to: '/misc-gear', 
        count: 23, 

      },
      {
        name: 'Tutorials',
        to: '/tutorials',
        count: 34, 
      }
    ]
  }), 
  components: {
    SVGIconRightArrow,
  }
}
</script>