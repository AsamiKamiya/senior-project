const makeNewUser = input => {
  return `mutation make_new_user {
      insert_user_data(
        objects: {
          device_id: "${input}",
          wallet: 300,
           tamamons: {
          Intellimon: {
            owned: true,
            fed: false,
            fedCount: 0,
            washed: 0,
            played: 0,
            modified: "test date"
    },
      Potemon: {
    
            owned: false,
            fed: false,
            fedCount: 0,
            washed: 0,
            played: 0,
            modified: "test date"
      },
        Pocchamon: {
    
            owned: false,
            fed: false,
            fedCount: 0,
            washed: 0,
            played: 0,
            modified: "test date"
      }
          }
            
        }
      ) {
       returning {
    device_id
      }
      }
    }`;
};

module.exports = makeNewUser;
