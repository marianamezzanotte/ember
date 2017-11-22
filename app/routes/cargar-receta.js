import Route from '@ember/routing/route';

export default Route.extend({
  ajax: Ember.inject.service(),

  model(params, transition) {
    return this.get('ajax').request('http://web-unicen.herokuapp.com/api/thing/group/333');
  },

 actions: 
 {
    guardar(nr, c, time){
      this.get('ajax').post('http://web-unicen.herokuapp.com/api/thing/', { data: {group: 333 , thing:{ nombrereceta: nr, categoria: c, tiempococ: time } }});
      this.refresh();
    },

    borrar(id){
      this.get('ajax').del('http://web-unicen.herokuapp.com/api/thing/'+id);
    }
  }

});
