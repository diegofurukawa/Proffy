import React from 'react'; 

import PageHeader from '../../components/PageHeader';

import './styles.css';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="inpu-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="inpu-block">
                        <label htmlFor="week-day">Dia da Semana</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="inpu-block">
                        <label htmlFor="time">Horas</label>
                        <input type="text" id="subject"/>
                    </div>

                </form>             
            </PageHeader>
        </div>
    );
}

export default TeacherList