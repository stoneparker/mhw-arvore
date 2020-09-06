const stories = [
   {
      id: 1,
      title: 'A princesa do reino encantado',
      author: 'Marianne Ribeiro',
      author_id: 1,
      age: 6,
      color_theme: '#CA3636',
      image_path: require('../assets/princess.png'),
      pages: [
         {
            page_id: 1,
            page_text: 'Era uma vez, um garotinho, João, que estava se sentindo muito triste, porque...',
         }
      ]
   },

   {
      id: 2,
      title: 'Leãozinho: O Rei da Floresta',
      author: 'Leonardo Azevedo',
      author_id: 2,
      age: 5,
      color_theme: '#47B552',
      image_path: require('../assets/lion.png'),
   },

   {
      id: 3,
      title: 'Longe de casa',
      author: 'Mariana Souza',
      author_id: 3,
      age: 7,
      color_theme: '#233F88',
      image_path: require('../assets/monsters.png'),
      pages: [
         {
            page_id: 1,
            page_text: 'Um alienígena muito engraçado é deixado na terra e decide esperimentar comidas vermelhas. Primeiro ele escolhe uma maçã e da grande mordida nela',
         },
         {
            page_id: 2,
            page_text: 'Depois ele escolheu uma cereja e experimentou com todo deleite. Era uma fruta com gosto ácido e doce ao mesmo tempo.',
         },
         {
            page_id: 3,
            page_text: 'Por último ele escolheu os morangos. Para ele foi a fruta mais gostosa que comeu. Doce que combinava com tudo e deixava ele muito feliz.',
         },
         {
            page_id: 4,
            page_text: 'E assim o alienigina satisfeito entrou em sua nave e voltou para casa.\nFim!'
         }
      ]
   },

   {
      id: 4,
      title: 'Meu dragãozinho',
      author: 'Matheus Amaral',
      author_id: 6,
      age: 6,
      color_theme: '#339DFF',
      image_path: require('../assets/dragon.png'),
   },

   {
      id: 5,
      title: 'Amizade inesperada',
      author: 'Laura Silva',
      author_id: 4,
      age: 6,
      color_theme: '#FFDB1D',
      image_path: require('../assets/dog.png'),
      pages: [
         {
            page_id: 1,
            page_text: 'Era uma vez, um garotinho, João, que estava se sentindo muito triste, porque deixou seu sorvete cair no chão.',
         },
         {
            page_id: 2,
            page_text: 'E então ele ficou extremamente triste vendo seu sorvete derrendo no chão. Então ele foi falar com sua mãe.',
         },
         {
            page_id: 3,
            page_text: 'Por último ele escolheu os morangos. Para ele foi a fruta mais gostosa que comeu. Doce que combinava com tudo e deixava ele muito feliz.',
         },
         {
            page_id: 4,
            page_text: 'Ela sugeriu que fossem a um lugar chamado “Petshop” para adotar um animal de estimação e alagra-lo. Ele concordou em ir.'
         },
         {
            page_id: 5,
            page_text: 'Já no petshop, o menino precisava decidir qual seria seu animal de estimação. Ele escolheu então um cachorro',
         },
         {
            page_id: 6,
            page_text: 'Depois de escolher seu bichinho o menino ficou muito mais feliz e aprendeu que um verdadeiro amigo tem quatro patas.',
         }
      ]
   }
];

export default stories;