const stories = [
   {
      id: 1,
      title: 'A princesa do reino encantado',
      author: 'Laura Silva',
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
      age: 5,
      color_theme: '#47B552',
      image_path: require('../assets/lion.png'),
   },

   {
      id: 3,
      title: 'Longe de casa',
      author: 'Mariana Souza',
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
      age: 6,
      color_theme: '#339DFF',
      image_path: require('../assets/dragon.png'),
   }
];

export default stories;