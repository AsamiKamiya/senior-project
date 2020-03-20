const makeNewUser = input => {
  const data = {};
  data.device_id = input.id;
  data.wallet = 150;
  data.tamamons = {
    Intellimon: {
      owned: false,
      fed: false,
      fedCount: 0,
      washed: false,
      played: false,
      modified: input.time
    },
    Potemon: {
      owned: false,
      fed: false,
      fedCount: 0,
      washed: false,
      played: false,
      modified: input.time
    },
    Pocchamon: {
      owned: true,
      fed: false,
      fedCount: 0,
      washed: false,
      played: false,
      modified: input.time
    },
    Higemon: {
      owned: false,
      fed: false,
      fedCount: 0,
      washed: false,
      played: false,
      modified: input.time
    },
    Birdmon: {
      owned: false,
      fed: false,
      fedCount: 0,
      washed: false,
      played: false,
      modified: input.time
    },
    Keromon: {
      owned: false,
      fed: false,
      fedCount: 0,
      washed: false,
      played: false,
      modified: input.time
    }
  };

  return {
    query: `
      mutation insert_user_data($objects: user_data_insert_input!) {
        insert_user_data(objects: [$objects]) {
          returning {
            device_id
          }
        }
      }
    `,
    variables: {
      objects: {
        device_id: data.device_id,
        wallet: data.wallet,
        tamamons: JSON.stringify(data.tamamons)
      }
    }
  };
};

const updateUserData = newData => {
  return {
    query: `
      mutation update_user_data($where:user_data_bool_exp!, $set: user_data_set_input) {
        update_user_data(
          where: $where, 
          _set: $set) 
            {
            returning {
              tamamons
            }
          }
      }
  `,
    variables: {
      where: { device_id: { _eq: newData.id } },
      set: {
        tamamons: JSON.stringify(newData.tamamons),
        wallet: newData.wallet
      }
    }
  };
};

module.exports = { makeNewUser, updateUserData };
