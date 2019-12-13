import React from 'react';
import PaypalButton from '../../components/Jobs/pay';
import qr from '../../assets/images/QR Code.png';
const CLIENT = {
  sandbox: 'AXLG5l9gXCMut3IBoDyqmqKyq0fP5tl4E1V_U0UInnEtNymfLXmNKVrMbDYL0Ehoelv98tYl3t-j-p8R',
  
};
const ENV = 'sandbox';
class donate extends React.Component {
  render() {
    const onSuccess = (payment) =>
      console.log('Successful payment!', payment);
    const onError = (error) =>
      console.log('Erroneous payment OR failed to load script!', error);
    const onCancel = (data) =>
      console.log('Cancelled payment!', data);
    return (
      <div>
      <div><h1>Hello , Please drop your donations here</h1></div>
      <div id ="qr"><img src={qr} alt="qr"></img></div>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_donations" />
<input type="hidden" name="business" value="gogreenerapp@gmail.com" />
<input type="hidden" name="currency_code" value="USD" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>

      <form>
            <input type="text"name="Amount" placeholder="Amount"  />
            
            
            
        <PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
          total={'100'}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
        </form>
      </div>
    );
  }
}
export default donate;