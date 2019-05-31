<template>
  <div class="container">
    <header class="app-header">
      <h1 class="app-headline">Filmmaker's Toolbox</h1>
      <p class="app-description">
        A website that provides you handy links to the web's best resources when it comes to filmmaking. 
        This website featuers a hand-currated list of apps , websites, gear, equipment, and other resources that are related to filmmaking.
      </p>
    </header>
    <main>
      <router-view/>
    </main>
    <footer class="app-footer">
      <p>
        <small>Made With Love By Steven Waters © 2019</small>
      </p>
    </footer>
  </div>
</template>

<style>
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    background-color: #fff;
    color: #444;
    font-size: 16px;
    
  }

  .container {
    width: 835px;
    margin: 0 auto; 
  }

  .app-header {
    padding: 20px;
    background: #333;
    color: #efefef;
    text-align: center; 
  }

  .app-header .app-headline {
    font-size: 2rem;
  }

  .app-header .app-description {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 375px) {
    .container {
      width: 340px;
    }

    .app-header .app-headline {
      font-size: 1.5rem;
    }

    .app-header .app-description {
      font-size: 1rem;
    }
  }
</style>

<script>

</script>