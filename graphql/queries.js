const devices = () => {
  return `
    query {
      user_data{
        device_id
      }
    }`;
};

const userData = input => {
  return `
    query {
      user_data_by_pk(device_id: "${input}"){
        wallet
        tamamons
      }
    }`;
};

module.exports = { userData, devices };
