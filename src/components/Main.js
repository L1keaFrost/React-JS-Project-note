import {NavLink} from 'react-router-dom';

function Main() {
    return (
        <div className="row">
            <div className="col-12">
                
                <div className="text">
                    <p><b>Заметочки</b> – сервис для обмена заметками. Создайте заметку, отправьте ссылку на заметку и ваш друг сможет ее просмотреть.
                После просмотра заметка будет удалена (или по истечении 15 минут с момента создания).</p>
                    <p>Как сделать заметку? </p>
                    <ul>
                        <li>Нажмите на кнопку создать заметку.</li>
                        <li>Напишите текст и нажмите Создать.</li>
                        <li>Отправьте сгенерированный адрес другу!</li>
                    </ul>
                    <div className="text">
                    <ul className="row button-list">
                        <li className="col-6"><NavLink exact='true' type=" button" className="btn btn-primary" to="/create">Создать Заметку</NavLink></li>
                        <li className="col-6"><NavLink exact='true' type=" button" className="btn btn-primary" to="/note">Просмотреть заметку</NavLink></li>
                    </ul>
                </div>
                    <p>Как прочитать заметку? Перейдите по присланному URL, либо введите адрес руками звесь.</p>
                </div>
            </div>
        </div>
    );
}

export default Main;