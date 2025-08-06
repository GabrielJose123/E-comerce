import HandItems from './HandItems'
import { HandSec } from './HandSec'

export const Categories = () => (
    <div style={{
        display:'flex',
        width:'100%',
        height:'8%',
        backgroundColor:'#dbdbdbff'
    }}>
        <HandItems></HandItems>
        <HandSec></HandSec>
    </div>
)