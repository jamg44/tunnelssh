<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :msg="message" />
    </div>
  </header>

  <div v-if="isDesktop" class="container">
    <button @click="getHosts">getHosts</button>
    <div v-if="error">
      There was an error attempting to read from the file system.
    </div>
    <template v-if="hosts.length">
      <div v-for="host in hosts" :key="host">
        {{ host }}
      </div>
    </template>
  </div>

  <main>
    <TheWelcome />
  </main>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import TheWelcome from '@/components/TheWelcome.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheWelcome,
  },
  data: function () {
    return {
      hosts: [],
      error: false
    }
  },
  computed: {
    message: function () {
      console.log('this.isDesktop', this.isDesktop)
      return this.isDesktop ? 'NW.js & Vue' : 'Vue'
    }
  },
  methods: {
    getHosts: async function () {
      if (this.isDesktop) {
        const fsPromises = this.require('fs/promises')
        const homeDir = this.require('os').homedir()
        try {
          const sshConfigText = await fsPromises.readFile(`${homeDir}/.ssh/config`, 'utf-8')
          const lines = sshConfigText.split('\n')
          this.hosts = lines.filter(l => l.startsWith('Host') )
        } catch (error) {
          this.hosts = []
          this.error = true
        }
      }
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
