Vue.component('repeater', {
  props: ['info'],
  template: '<div><h1>{{info.title}}</h1><p>{{info.copy}}</p><img :src="info.image"></div>'
});

new Vue({
  el: '#index',
  data() {
    return {
      header:{
        title: '',
        copy: '',
        image: ''
      },
      service_1:{
        title: '',
        copy: '',
        image: ''
      },
      service_2:{
        title: '',
        copy: '',
        image: ''
      },
      service_3:{
        title: '',
        copy: '',
        image: ''
      }
    }
  },
  beforeCreate: function(){
    const client = contentful.createClient({
      space: 'qnruahr4725t',
      environment: 'master',
      accessToken: '89cfc8391b49b8ccda727ec73df9de35c60b2a8e17241c31d309e8f8eab5345e'
    })

    client.getEntries({
      content_type: 'solutions'
    })
    .then((entry) => {
      entry.items.sort((a,b)=>(a.fields.orderOnPage)-(b.fields.orderOnPage))
      console.log(entry)
      return this.header.title = entry.items[0].fields.titleOfSolution[0],
        this.header.copy = entry.items[0].fields.description,
        this.header.image = 'https:'+entry.items[0].fields.imgForSolution.fields.file.url+'?w=400',

        this.service_1.title = entry.items[1].fields.titleOfSolution[0],
        this.service_1.copy = entry.items[1].fields.description,
        // this.service_1.image = entry.items[1].fields.imgForSolution.fields.file.url,

        this.service_2.title = entry.items[2].fields.titleOfSolution[0],
        this.service_2.copy = entry.items[2].fields.description,
        // this.service_2.image = entry.items[2].fields.imgForSolution.fields.file.url,

        this.service_3.title = entry.items[3].fields.titleOfSolution[0],
        this.service_3.copy = entry.items[3].fields.description
        // this.service_2.image = entry.items[3].fields.imgForSolution.fields.file.url
    }).catch((err) => console.log(err))
  }
})

