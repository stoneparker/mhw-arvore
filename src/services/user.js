const user = {
   name: 'Matheus Samuel',
   age: 4,
   email: 'maematheus@gmail.com',
   goals: [
      {
         goal_id: 1,
         goal_description: 'Faça um desenho.',
         goal_color: '#F8B118',
         goal_icon_path: require('../assets/dinosaur.png')
      },
      {
         goal_id: 2,
         goal_description: 'Leia duas histórias.',
         goal_color: '#F27C73',
         goal_icon_path: require('../assets/two.png')
      },
   ]
}

export default user;