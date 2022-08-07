import React, { useState } from 'react';
import './Form.scss';

export default function Form() {
  const [name, setName] = useState('');
  const [telNo, setTelNo] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isTel, setIsTel] = useState(false);
  const [isSms, setIsSms] = useState(false);
  const [isPosta, setIsPosta] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  // the formSubmit is the object which will be sent to the server
  const [formSubmit, setFormSubmit] = useState({});

  const submitValidForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormSubmit({
      name,
      telNo,
      email,
      message,
    });

    setName('');
    setTelNo('');
    setEmail('');
    setMessage('');
    setIsTel(false);
    setIsSms(false);
    setIsPosta(false);
    setIsAgreed(false);
  }

  return (
    <div className="Form">
      <h3 className="Form__title">
        KAMPANYALAR HAKKINDA BİLGİ ALIN
      </h3>
      <form onSubmit={submitValidForm} >
        <input 
          className="Form__inputs"
          type="text" 
          placeholder="Ad Sayad *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input 
          className="Form__inputs"
          type="text" 
          placeholder="Telefon Numaranız *"
          value={telNo}
          onChange={(e) => setTelNo(e.target.value)}
        />
        <input 
          className="Form__inputs"
          type="text" 
          placeholder="Email Adresiniz *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          className="Form__inputs"
          type="text" 
          placeholder="Mesajınızı Giriniz"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <p className="Form__info">
          Tarafıma, kanunlara uygun bir şekilde, her türlü ürün ve
          hizmetlere ilişkin çeşitli tanıtım, promosyon, reklam, satış
          ve pazarlama amacıyla Torunlar Gayrimenkul Yatırım Ortaklığı
          Anonim Şirketi tarafından aşağıdaki seçtiğim yöntemler ve iletişim
          araçları ile ticari elektronik iletiler gönderilmesine onay veriyorum.
        </p>

        <div className="Form__check-area">
          <label htmlFor="telefon">Telefon</label>
          <input 
            className="Form__circle-checkbox"
            type="checkbox" name="telefon" id="telefon" 
            checked={isTel} 
            onChange={() => setIsTel(!isTel)}
          />
          <label htmlFor="sms">Kısa Mesaj/SMS/Bildirim</label>
          <input 
            className="Form__circle-checkbox"
            type="checkbox" name="sms" id="sms"
            checked={isSms} 
            onChange={() => setIsSms(!isSms)}
          />
          <label htmlFor="eposta">E-Posta</label>
          <input 
            className="Form__circle-checkbox"
            type="checkbox" name="eposta" id="eposta" 
            checked={isPosta} 
            onChange={() => setIsPosta(!isPosta)}
          />
        </div>

        <div className="Form__aggrement">
          <input 
            className="Form__aggrement-checkbox"
            type="checkbox" name="aggrement" id="aggrement"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)}
          />
          <label htmlFor="aggrement">
            Aydınlatma metni kapsam ve sınırında Torunlar GYO Anonim Şirketi
            tarafından kişisel verilerimin işlenmesine onay veriyorum.
          </label>
        </div>

        <button type="submit" className="Form__button">
          FORMU GÖNDER
        </button>

        <a 
          href="tel: +902122674747"
          className="Form__phone"
        >
          0212 267 47 47
        </a>
      </form>
    </div>
  )
}
