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