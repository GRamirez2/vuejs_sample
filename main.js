Vue.component('repeater', {
  props: ['info'],
  template: '<div><h1>{{info.title}}</h1><p>{{info.copy}}</p></div>'
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
      console.log(entry)
      // return this.header.title = entry.items[4].fields.title,
      //   this.header.copy = entry.items[4].fields.copy,
      //   this.header.image = entry.items[4].sys.createdAt,
      //   this.service_1.title = entry.items[1].fields.title,
      //   this.service_1.copy = entry.items[1].fields.modules[0].fields.copy,
      //   this.service_2.title = entry.items[30].fields.modules[0].fields.title,
      //   this.service_2.copy = entry.items[30].fields.modules[0].fields.copy
    }).catch((err) => console.log(err))
  }
})

