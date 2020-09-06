const user = {
   id: 4,
   name: 'Laura Silva',
   age: 6,
   email: 'maedalaura@gmail.com',
   goals: [
      {
         goal_id: 1,
         goal_description: 'Faça um desenho de alguma história criada.',
         goal_color: '#F27C73',
         goal_icon_path: require('../assets/dinosaur.png')
      },
      {
         goal_id: 2,
         goal_description: 'Faça uma atividade em família.',
         goal_color: '#0097A7',
         goal_icon_path: require('../assets/heart.png')
      },
   ],
   stories: [5, 6, 7, 8],
}

export default user;