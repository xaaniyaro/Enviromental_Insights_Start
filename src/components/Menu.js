import React from 'react';

const Menu = () => {
    return(
        <div className="ui bottom attached segment pushable">
            <div className="ui visible inverted left vertical sidebar menu">
            <div className="item">
                <div className="header">Visualización de datos</div>
                <div className="menu">
                <a href="/" className="item">Meteorológicos</a>
                </div>
            </div>
            <div className="item">
                <div className="header">Calculadoras</div>
                <div className="menu">
                <a href="/" className="item">Potencial solar AMM</a>
                <a href="/" className="item">Simulación energética</a>
                </div>
            </div>
            <div className="item">
                <div className="header">Sobre la plataforma</div>
                <div className="menu">
                <a href="/" className="item">El proyecto</a>
                <a href="/" className="item">El equipo</a>
                </div>
            </div>
                    <div className="pusher">
                    <div class="ui basic segment">
                        <h3 class="ui header">Application Content</h3>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        </div>
                    </div>
        </div>
        </div>
    );
};

export default Menu;