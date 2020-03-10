import NavBar from '../components/NavBar'

export default ({ children }) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto'
    }}>
        <div><NavBar /></div>
        <div>{children}</div>
    </div>
)