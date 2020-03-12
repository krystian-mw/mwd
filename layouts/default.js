import NavBar from '../components/NavBar'

export default ({ children }) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto'
    }}>
        <div id="NavBar"><NavBar /></div>
        <div id="Body">{children}</div>
    </div>
)