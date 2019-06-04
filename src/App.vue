<template>
  <div class="container">
    <header class="app-header">
      <h1 class="app-headline">Filmmaker's Toolbox</h1>
      <p class="app-description">
        Hand-picked products and services for the filmmaker in you.
      </p>
    </header>
    <main>
      <router-view />
    </main>
    <footer class="app-footer">
      <p class="app-footer-content">
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

  body, html, p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    background: #a8ff78; 
    background: linear-gradient(to right, #78ffd6, #a8ff78); 
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

  .app-footer {
    background: #333;
    color: #fff;
    text-align: center;
  }

  .app-footer-content {
    padding: 20px 0;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 375px) {
    .container {
      width: 355px;
    }

    .app-header .app-headline {
      font-size: 1.5rem;
    }

    .app-header .app-description {
      font-size: 1.2rem;
    }
  }
</style>

<script>
</script>