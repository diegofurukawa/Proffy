import React from 'react'; 

import PageHeader from '../../components/PageHeader';

import whastsappicon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dia da Semana</label>
                        <input type="text" id="week-day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Horas</label>
                        <input type="text" id="time"/>
                    </div>

                </form>             
            </PageHeader>

            <main>
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
            </main>
        </div>
    );
}

export default TeacherList