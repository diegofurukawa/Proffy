import React from 'react';

import whastsappicon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://lh3.googleusercontent.com/ogw/ADGmqu9HjUslQTINhfbcEFBNMVyalvCTTTGhAEvyCxJR=s83-c-mo" alt="Diego Furukawa"/>
                        <div>
                            <strong>Diego Furukawa</strong>
                            <span>Natação</span>
                        </div>

                    </header>

                    <p>
                        Texto sugestivo para atrair os possíveis alunos
                        <br/><br/>
                        Mais explicações para ou sobre, Texto sugestivo para atrair os possíveis alunos
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 50,00</strong>
                        </p>
                        <button type="button">
                            <img src={whastsappicon} alt="WhatsApp"/>
                            Entrar em contato

                        </button>
                    </footer>


                </article>
    )
}

export default TeacherItem;