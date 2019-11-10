<template>
  <div class="home">
    <ul>
      <li v-for="repos in repositories" :key="repos.id">
        <a :href="repos.html_url" target="_blank">{{ repos.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import api from '@/utils/api'

export default {
  data(){
    return {
      repositories: []
    }
  },
  created(){
    api.get('/users/ohde-sg/repos')
      .then(function(res){
        console.log(res)
        this.repositories = res.data
      }.bind(this))
  }
}
</script>
