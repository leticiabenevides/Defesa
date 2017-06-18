angular.module('models', []);
angular.module('models').factory('models', function(Categoria, Movimentacao, Users){
  /**
   * Um objeto pra registrar os meus modelos de coisas persistentes
   */
  var models = {};
  
  models.Categoria = Categoria;
  models.Movimentacao = Movimentacao;
  models.Users = Users;
  
  return models;
});

angular.module('models').factory('Categoria', function(){
  /**
   * Um construtor de categoria
   * INCLUIR CHAVE ESTRANGUEIRA
  */

    function Categoria(nome, ){
    this.nome = nome;
   
  }
  
  
  return Categoria;
});

angular.module('models').factory('Movimentacao', function(){
  /**
   * Um construtor de movimentacao
   * INCLUIR CHAVES ESTRANGEIRAS
   */
  function Movimentacao(valor, descricao, data,  ){
    
    this.valor = valor;
    this.descricao = descricao;
    this.data = data;
    this.nome = nome;
    this. = ;
    this. = ;
  }
 return Movimentacao;
  
/**function movimentando(){

      console.log(' movimentacao em andamento');

  }*/
});


angular.module('models').factory('Users', function(){
  /**
   * Um construtor de users
   */
  function Users(email, password ){
    this.email = email;
    this.password = password;
  }
return Users
});
