<template>
  <section class="panels">
    <div class="panel" v-for="(link, index) in links" :key="index">
      <router-link :to="link.to">{{ link.name }}</router-link>
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
    height: 200px; 
    margin-top: 10px;
    padding: 20px;
    background: #333;
    line-height: 180px;
    text-align: center; 
  }

  .panel a:link, .panel a:visited, .panel a:active {
    color: #fff;
    font-size: 1.5rem;
  }


  @media screen and (max-width: 375px) {
    .panel {
      width: 172px;
      height: 172px; 
      line-height: 155px;
      padding: 10px;
    }
  }
</style>

<script>
export default {
  data: () => ({
    links: [
      {
        name: 'Cameras',
        to: '/cameras'
      },
      {
        name: 'Gaffer\'s Tape',
        to: '/gaffers-tape'
      },
      {
        name: 'Bags',
        to: '/bags'
      },
      {
        name: 'Audio',
        to: '/audio'
      }, 
      {
        name: 'Smartphone Apps',
        to: '/mobile-apps'
      }, 
      {
        name: 'Screen Writing Software',
        to: '/screen-writing-software'
      }, 
      {
        name: 'Blogs',
        to: '/blogs'
      }, 
      {
        name: 'Misc. Websites',
        to: '/misc-websites'
      }, 
      {
        name: 'Sliders',
        to: '/sliders'
      }, 
      {
        name: 'Stabilizers',
        to: '/stabilizers'
      }, 
      {
        name: 'Lighting',
        to: '/lighting'
      },
      {
        name: 'Misc. Gear',
        to: '/misc-gear'
      },
      {
        name: 'Tutorials',
        to: '/tutorials'
      }
    ]
  })
}
</script>