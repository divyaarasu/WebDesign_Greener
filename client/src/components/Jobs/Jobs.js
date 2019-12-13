import React from 'react';
import PaypalButton from './pay';
const CLIENT = {
  sandbox: 'AXLG5l9gXCMut3IBoDyqmqKyq0fP5tl4E1V_U0UInnEtNymfLXmNKVrMbDYL0Ehoelv98tYl3t-j-p8R',
  
};
const ENV = 'sandbox';
class Jobs extends React.Component {
  render() {
    const onSuccess = (payment) =>
      console.log('Successful payment!', payment);
    const onError = (error) =>
      console.log('Erroneous payment OR failed to load script!', error);
    const onCancel = (data) =>
      console.log('Cancelled payment!', data);
    return (
      <div>
        <PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
          total={100}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
      </div>
    );
  }
}
export default Jobs;