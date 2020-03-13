const makeNewUser = input => {
  return `
    mutation make_new_user {
      insert_user_data(
        objects: {
          device_id: "${input}",
          wallet: 300,
          tamamons: {
            Intellimon: {
              owned: true,
              fed: true,
              fedCount: 3,
              washed: true,
              played: true,
              modified: "${new Date("Fri Mar 13 2020 15:54:21 GMT+0900 (JST)")}"
            },
            Potemon: {
              owned: false,
              fed: false,
              fedCount: 0,
              washed: false,
              played: false,
              modified: "${new Date("Fri Mar 13 2020 15:54:21 GMT+0900 (JST)")}"
            },
            Pocchamon: {    
              owned: true,
              fed: true,
              fedCount: 4,
              washed: true,
              played: true,
              modified: "${new Date("Fri Mar 13 2020 15:54:21 GMT+0900 (JST)")}"
            }
          }
        }) 
      {
        returning {
          device_id
        }
      }
    }`;
};

module.exports = makeNewUser;
