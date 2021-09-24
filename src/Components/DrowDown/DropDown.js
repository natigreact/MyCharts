import React, {useState} from "react"
import './DrowDown.css'
import SettingsIcon from '@material-ui/icons/Settings'

const DropDown = ({ data, showStrings, setShowStrings }) => {

    const [settingsMenuOpen, setSettingsMenuOpen] = useState(false)

    const handleChange = (e) => {
        let x = e.target.value
            setShowStrings(!showStrings)
       }


    return (
        <div>
            <SettingsIcon className='button' onClick={() => setSettingsMenuOpen(!settingsMenuOpen)}/>
                <div className={!settingsMenuOpen ? 'settings__menu active' : 'settings__menu'}
                     onClick={() => setSettingsMenuOpen(false)}>

                    <div onClick={e => e.stopPropagation()}>

                    <ul>
                        {data.map((item, index) =>
                                <li>
                                    <label>

                                        {
                                        <input type="checkbox"
                                               value={index}
                                               onChange={handleChange}
                                               id={item.id} key={item.id}
                                        />
                                        }
                                        {item.name}

                                    </label>
                                </li>)
                        }
                    </ul>
                    </div>
                </div>
        </div>
    );
};


export default DropDown