const stories = [
   {
      id: 1,
      description: 'Uma história de coragem e amor',
      color_theme: '#1B9F97',
      image_path: require('../assets/warrior.png'),
      tags: [
         {
            tag_name: 'Aventura',
            tag_color: '#FDFF8C'
         },
         {
            tag_name: 'Romance',
            tag_color: '#FFD0F5'
         }
      ],
      synopsis: 'Uma criança está se sentindo muito triste porque não tem amigos. Como seu cachorrinho pode ajudar?',
   },

   {
      id: 2,
      description: 'Uma história de amizade verdadeira',
      color_theme: '#FFDB1D',
      image_path: require('../assets/dog.png'),
      tags: [
         {
            tag_name: 'Animais',
            tag_color: '#A9FFA7'
         },
         {
            tag_name: 'Amizade',
            tag_color: '#D0DDFF'
         }
      ],
      synopsis: 'Uma criança está se sentindo muito triste porque não tem amigos. Como seu cachorrinho pode ajudar?',
      pages: [
         {
            page_id: 0,
            page_text: 'Era uma vez, um garotinho, João, que estava se sentindo muito triste, porque...',
            options: [
               {
                  option_id: 1,
                  option_text: 'Seus amigos se mudaram de cidade',
                  next_page: 1,
               },
               {
                  option_id: 2,
                  option_text: 'Deixou seu sorvete cair no chão',
                  next_page: 1,
               },
               {
                  option_id: 3,
                  option_text: 'Perdeu seu brinquedo favorito',
                  next_page: 1,
               },
            ],
         },

         {
            page_id: 1,
            page_text: 'E então ele ficou extremamente triste vendo seu sorvete derrendo no chão. Então ele...',
            options: [
               {
                  option_id: 1,
                  option_text: 'Foi falar com sua mãe',
                  next_page: 2,
               },
               {
                  option_id: 2,
                  option_text: 'Sentou no chão e começou a chorar',
                  next_page: 2,
               },
               {
                  option_id: 3,
                  option_text: 'Comprou outro sorvete',
                  next_page: 2,
               },
            ],
         },

         {
            page_id: 2,
            page_text: 'Ela sugeriu que fossem a um lugar chamado “Petshop” para adotar um animal de estimação e alagra-lo. Ele...',
            options: [
               {
                  option_id: 1,
                  option_text: 'Queria saber o que era “petshop”',
                  next_page: 3,
               },
               {
                  option_id: 2,
                  option_text: 'Disse que queria mais um sorvete',
                  next_page: 3,
               },
               {
                  option_id: 3,
                  option_text: 'Concordou em ir',
                  next_page: 3,
               },
            ],
         },

         {
            page_id: 3,
            page_text: 'Já no petshop, o menino precisava decidir qual seria seu animal de estimação. Ele escolheu então...',
            options: [
               {
                  option_id: 1,
                  option_text: 'Um cachorro',
                  next_page: 4,
               },
               {
                  option_id: 2,
                  option_text: 'Um gato',
                  next_page: 4,
               },
               {
                  option_id: 3,
                  option_text: 'Uma tartaruga',
                  next_page: 4,
               },
            ],
         },

         {
            page_id: 4,
            page_text: 'Depois de escolher seu bichinho o menino ficou muito mais feliz e aprendeu que um verdadeiro amigo tem quatro patas.',
            options: [
               {
                  option_id: 1,
                  option_text: 'FIM!',
                  next_page: 1,
               },
            ],
         },
      ]
   },

   {
      id: 3,
      description: 'Uma história de magia e suspense',
      color_theme: '#4D1B9F',
      image_path: require('../assets/wizard.png'),
      tags: [
         {
            tag_name: 'Aventura',
            tag_color: '#FDFF8C'
         },
         {
            tag_name: 'Suspense',
            tag_color: '#EAD0FF'
         }
      ],
      synopsis: 'Uma criança está se sentindo muito triste porque não tem amigos. Como seu cachorrinho pode ajudar?',
   },
];

export default stories;