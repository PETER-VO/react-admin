import './widgetSm.css';
import { Visibility } from '@material-ui/icons';

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
             <span className='widgetSmTitle'>New Join Members</span>
             <ul className='widgetSmList'>
                <li className='widgetSmListItem'>
                    <img src='https://robohash.org/2?set=set2&size=180x180' alt='' className='widgetSmImg'/>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Anna Keller</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
             </ul>
             <ul className='widgetSmList'>
                <li className='widgetSmListItem'>
                    <img src='https://robohash.org/5?set=set2&size=180x180' alt='' className='widgetSmImg'/>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Anna Keller</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
             </ul>
             <ul className='widgetSmList'>
                <li className='widgetSmListItem'>
                    <img src='https://robohash.org/9?set=set2&size=180x180' alt='' className='widgetSmImg'/>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Anna Keller</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
             </ul>
        </div>
    )
}
